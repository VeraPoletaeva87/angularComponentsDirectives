export interface Item {
  id: {
    kind: string;
    videoId: string;
  },
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: Date;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
}

export interface ResultData {
    kind: string,
    etag: string,
    nextPageToken: string,
    regionCode: string,
    pageInfo: {
      totalResults: number,
      resultsPerPage: number
    },
    items: Item[]
}

export interface WholeVideoData {
  id: string,
  snippet: {
    title: string;
    description: string;
    channelTitle: string;
    publishedAt: Date;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
  statistics: {
    likeCount: string,
    favoriteCount: string,
    commentCount: string,
    viewCount: string
  }
}

export interface Statistics {
  likeCount: string,
  favoriteCount: string,
  commentCount: string,
  viewCount: string
};

export interface StatisticsData {
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      statistics: {
        likeCount: string,
        favoriteCount: string,
        viewCount: string,
        commentCount: string
      }
    }
    
  ]
}