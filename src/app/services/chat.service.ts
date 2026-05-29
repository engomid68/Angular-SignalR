import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { environment } from '../../environment/environment';

export interface ChatMessage {
  user: string;
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection!: signalR.HubConnection;
  public messages$ = new Subject<ChatMessage>();
  public privateMessages$ = new Subject<ChatMessage>();
  public users$ = new Subject<string[]>();
  public userConnected$ = new Subject<string>();
  public userDisconnected$ = new Subject<string>();

  startConnection(username: string): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.signalr.hubUrl}?username=${username}`)
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.registerHandlers();

    return this.hubConnection.start()
      .then(() => console.log('SignalR connected!'))
      .catch(err => console.error('Error connecting: ', err));
  }

  private registerHandlers(): void {
    this.hubConnection.on('ReceiveMessage', (user: string, message: string, timestamp: Date) => {
      this.messages$.next({ user, message, timestamp });
    });

    this.hubConnection.on('ReceivePrivateMessage', (user: string, message: string, timestamp: Date) => {
      this.privateMessages$.next({ user, message, timestamp });
    });

    this.hubConnection.on('UserConnected', (username: string) => {
      this.userConnected$.next(username);
    });

    this.hubConnection.on('UserDisconnected', (username: string) => {
      this.userDisconnected$.next(username);
    });

    this.hubConnection.on('ConnectedUsers', (users: string[]) => {
      this.users$.next(users);
    });
  }

  sendMessage(user: string, message: string): void {
    this.hubConnection.invoke('SendMessage', user, message)
      .catch(err => console.error(err));
  }

  sendPrivateMessage(targetUser: string, message: string): void {
    this.hubConnection.invoke('SendPrivateMessage', targetUser, message)
      .catch(err => console.error(err));
  }

  stopConnection(): void {
    this.hubConnection?.stop().catch(err => console.error(err));
  }
}