import { createSelector } from '@ngrx/store';
import { State } from '../reducers/videoList.reducer';
import { WholeDataCustom } from 'src/app/shared/types';

export const selectItems = (state: State) => state.videos.videoList;
export const getItems = createSelector<State, WholeDataCustom[], WholeDataCustom[]>(
    selectItems,
    (list) => 
    {return list }
);