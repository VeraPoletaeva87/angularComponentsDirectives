export interface Item {
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
      standard: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
}
