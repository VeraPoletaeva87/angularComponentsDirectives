import { WholeDataCustom } from '../shared/types';
import { State } from './state.models';

export const mockData: WholeDataCustom = {
    id: 'fsdhjkf3242bnmb',
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
    },
    statistics: {
      likeCount: '22',
      favoriteCount: '243',
      commentCount: '234234'
    },
    custom: true,
    favorite: false
};

export const videoListMock: WholeDataCustom[] = [
    mockData
];

export const videoStateMock: State = {
    customVideos: {
        videoList: [],
      },
      youTubeVideos: {
        videoList: videoListMock,
        loading: false,
        error: false
      }
};