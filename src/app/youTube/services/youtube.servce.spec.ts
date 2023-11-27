import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { YouTubeService } from './youTube.service';
import { WholeDataCustom } from 'src/app/shared/types';
import { StoreModule } from '@ngrx/store';

describe('DataService', () => {
  let httpTestingController: HttpTestingController;
  let service: YouTubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}, {})
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(YouTubeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('#getData should return expected data', (done) => {
    const expectedData: WholeDataCustom[] = [
      { id: '1',
        snippet: {
            title: 'title1',
            publishedAt: new Date,
            channelId: '',
            channelTitle: '',
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
        },
        statistics: {
            likeCount: '1',
            favoriteCount: '2',
            commentCount: '3'
        } ,
        custom: false,
        favorite: false
    }
    ];

    service.getItems$().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1');

    testRequest.flush(expectedData);
  });

  it('#getData should use GET to retrieve data', () => {
    service.getItems$().subscribe();

    const testRequest = httpTestingController.expectOne('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1');

    expect(testRequest.request.method).toEqual('GET');
  });


  it('#getData should return an empty object on error', (done) => {
    const expectedData: WholeDataCustom[] = []

    service.getItems$().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1');

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });
});