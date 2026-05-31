// cache.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, { response: HttpResponse<any>, expiry: number }>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip caching for non-GET requests or when explicitly disabled
    if (req.method !== 'GET' || req.headers.has('X-Bypass-Cache')) {
      return next.handle(req);
    }

    const cacheKey = req.urlWithParams;
    const cached = this.cache.get(cacheKey);

    // Check if cached response is still valid
    if (cached && cached.expiry > Date.now()) {
      return of(cached.response.clone());
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Get cache control header from response
          const cacheControl = event.headers.get('Cache-Control');
          const maxAge = this.parseMaxAge(cacheControl) || 300; // Default 5 minutes

          this.cache.set(cacheKey, {
            response: event,
            expiry: Date.now() + (maxAge * 1000)
          });
        }
      })
    );
  }

  private parseMaxAge(cacheControl: string | null): number | null {
    if (!cacheControl) return null;
    const match = cacheControl.match(/max-age=(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }

  clearCache() {
    this.cache.clear();
  }
}