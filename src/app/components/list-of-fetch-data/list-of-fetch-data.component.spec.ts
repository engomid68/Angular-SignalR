import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFetchDataComponent } from './list-of-fetch-data.component';

describe('ListOfFetchDataComponent', () => {
  let component: ListOfFetchDataComponent;
  let fixture: ComponentFixture<ListOfFetchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfFetchDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfFetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
