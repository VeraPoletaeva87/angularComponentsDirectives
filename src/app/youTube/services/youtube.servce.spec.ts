import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { YouTubeService } from './youTube.service';
import { Item } from 'src/app/shared/types';
import { StoreModule } from '@ngrx/store';

describe('DataService', () => {
  let httpMock: HttpTestingController;
  let service: YouTubeService;
  const expectedData: Item = {
    kind: "youtube#searchResult",
    etag: "NKBDlcVyjqNNqCdYAjijlrMOef4",
    id: {
      kind: "youtube#video",
      videoId: "dUaCEs3HfdI"
    },
    snippet: {
      publishedAt: new Date("2018-04-12T09:29:20Z"),
      channelId: "UC56gTxNs4f9xZ7Pa2i5xNzg",
      title: "Aastha Gill - Buzz feat Badshah | Priyank Sharma | Official Music Video",
      description: "2015 marked the debut of Badshah with DJ Waley Babu – A powerful chartbuster with hypnotic beats, powerful vocals and a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dUaCEs3HfdI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dUaCEs3HfdI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dUaCEs3HfdI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      channelTitle: "Sony Music India",
      liveBroadcastContent: "none",
      publishTime: new Date("2018-04-12T09:29:20Z")
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({}, {})],
      providers: [YouTubeService] 
    });

    service = TestBed.inject(YouTubeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getItem should  use GET to retrieve data', () => {
    service.getItem('dUaCEs3HfdI').subscribe();

    const testRequest = httpMock.expectOne('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=dUaCEs3HfdI');

    expect(testRequest.request.method).toEqual('GET');
  });


  it('getStatistics should return an empty object on wrong id', (done) => {
    const expectedData = {
      likeCount: '',
      favoriteCount: '',
      commentCount: '',
      viewCount: ''
    };


    service.getStatistics('wrongId').subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpMock.expectOne('https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=wrongId');
    testRequest.flush('error', { status: 500, statusText: 'Wrong id' });
  });
});