import { createReducer, on } from '@ngrx/store';
import * as Favorites from '../actions/favorites.actions';
import { WholeDataCustom } from 'src/app/shared/types';
import { State, initialState } from './videoList.reducer';

// export interface State {
//     videoList: WholeDataCustom[];
// }

// export const initialState: State = {
//     videoList: []
// };

export const favoriteVideoReducer = createReducer(
  initialState,
  on(Favorites.AddToFavorites, (state, props) => { return { ...state, videoList: [...state.videos.videoList, props.item]}}),
  on(Favorites.DeleteFromFavorites, (state, props) => 
      { return { ...state, videoList: state.videos.videoList.filter((item: WholeDataCustom) => {return item.id !== props.id} ) }})
);