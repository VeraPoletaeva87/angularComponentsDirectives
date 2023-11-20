import { createAction, props } from '@ngrx/store';
import { WholeDataCustom } from 'src/app/shared/types';
 
export const AddToFavorites = createAction('[List Page] Add To Favorites', props<{item: WholeDataCustom }>());
export const DeleteFromFavorites = createAction('[List Page] Delete From Favorites', props<{ id: string }>());