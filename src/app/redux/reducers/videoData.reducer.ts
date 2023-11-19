import { state } from '../state.models';
import * as CustomVideoData from '../actions/videoData.actions';
import {  WholeVideoData } from 'src/app/shared/types';

export interface State {
    videoData: WholeVideoData;
    videoList: WholeVideoData[];
    favoritesList: WholeVideoData[];
  }

export const initialState: State = {
    videoData: {
        id: '',
        snippet: {
            publishedAt: new Date,
            channelId: '',
            channelTitle: '',
            title: '',
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
    statistics:   {
        likeCount: '',
        favoriteCount: '',
        commentCount: ''
        }
    },
    videoList: [],
    favoritesList: []
};

export function reducer(
    state = initialState,
    action: CustomVideoData.CustomVideoActions
  ): typeof state {
    switch (action.type) {
      case CustomVideoData.ActionTypes.AddCustomVideo: {
        return {
          ...state,
          //add to array
        };
      }

      case CustomVideoData.ActionTypes.GetCustomVideo: {
        return action.payload; 
      }
   
   
      case CustomVideoData.ActionTypes.DeleteCustomVideo: {
        return {
            ...state,
            //delete from array
          };
      }
   
      default: {
        return state;
      }
    }
  }