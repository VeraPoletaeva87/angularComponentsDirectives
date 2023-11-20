import { createReducer, on } from '@ngrx/store';
import * as CustomVideoData from '../actions/videoList.actions';
import {  WholeDataCustom } from 'src/app/shared/types';

export interface State {
  videos: {
    videoList: WholeDataCustom[];
  }
  }

export const initialState: State = {
  videos: {
    videoList: []
  }
};

export const customVideoReducer = createReducer(
  initialState,
  on(CustomVideoData.AddCustomVideo, (state, props) => { return { ...state, videoList: [...state.videos.videoList, props.item]}}),
  on(CustomVideoData.DeleteCustomVideo, (state, props) => 
      { return { ...state, videoList: state.videos.videoList.filter((item: WholeDataCustom) => {return item.id !== props.id} ) }})
);