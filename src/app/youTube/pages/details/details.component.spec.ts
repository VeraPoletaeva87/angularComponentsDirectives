import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { WholeDataCustom } from 'src/app/shared/types';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../core/components/header/header.component';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let router: Router;

  const testItem: WholeDataCustom = {
      snippet: {
        channelTitle: 'Channel Title',
        title: 'Video Title',
        publishedAt: new Date,
        channelId: '',
        description: 'Test description',
        thumbnails: {
          default: {
            url: '',
            width: 0,
            height: 0
          },
          medium: {
            url: '',
            width: 0,
            height: 0
          },
          high: {
            url: '',
            width: 0,
            height: 0
          }
        },
        liveBroadcastContent: '',
        publishTime: new Date
      }
  }



  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        StoreModule.forRoot({}, {}),
        RouterTestingModule.withRoutes([
          { path: 'details/:id', component: DetailsComponent },
          { path: "", component: HeaderComponent }
      ])]
    });
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show correct data', () => {
    component.item = testItem;
    fixture.detectChanges();
    const element = fixture.debugElement;
    let detailsElement = element.query(By.css('.description-text')).nativeElement;
    expect(detailsElement.textContent).toContain('Test description');
    detailsElement = element.query(By.css('.title')).nativeElement;
    expect(detailsElement.textContent).toContain('Channel Title Video Title');
  });

  it('backClickHandler should navigate to main page', () => {
    const spy = jest.spyOn(router, 'navigate');
    component.backClickHandler();
    expect(spy).toHaveBeenCalledWith(['/main']);
  });
});
