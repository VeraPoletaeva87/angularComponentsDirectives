import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { WholeDataCustom } from 'src/app/shared/types';
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from '@ngrx/store';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let title: HTMLElement;

  const testItem: WholeDataCustom = {
      snippet: {
        channelTitle: 'Channel Title',
        title: 'Video Title',
        publishedAt: new Date,
        channelId: '',
        description: '',
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
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    title = fixture.nativeElement.querySelector('title');
  });

  it('title field should display a test title', () => {
    component.item = testItem;
    fixture.detectChanges();
    
    expect(title.textContent).toContain('Channel Title Video Title');
  });
});
