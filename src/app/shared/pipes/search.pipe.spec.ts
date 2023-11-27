import { SearchPipe } from './search.pipe';
import { Item } from '../types';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();
  const searchString = 'cats';
  const testItems: Item[] = [
    {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: 'Id1'
      },
      snippet: {
        publishedAt: new Date,
        channelId: 'id1',
        channelTitle: 'channel',
        title: 'cats',
        description: 'cats like to eat fish',
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
    },
    {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: 'Id2'
      },
      snippet: {
        publishedAt: new Date,
        channelId: 'id1',
        channelTitle: 'channel',
        title: 'dogs',
        description: 'dogs like to eat fish too',
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
    },
  ];

  const filteredItems: Item[] = [
    {
      kind: '',
      etag: '',
      id: {
        kind: '',
        videoId: 'Id1'
      },
      snippet: {
        publishedAt: new Date,
        channelId: 'id1',
        channelTitle: 'channel',
        title: 'cats',
        description: 'cats like to eat fish',
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
  ];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('searches by search string in a given array of items', () => {
    expect(pipe.transform(testItems, searchString)).toStrictEqual(filteredItems);
  });
});
