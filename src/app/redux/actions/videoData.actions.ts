import { Action } from '@ngrx/store';
import { WholeVideoData } from 'src/app/shared/types';

export enum ActionTypes {
  AddCustomVideo = '[Create Card Page] Add Custom Video',
  GetCustomVideo = '[List Page] Get Custom Video',
  DeleteCustomVideo = '[List Page] Delete Custom Video',
}
 
export class AddCustomVideo implements Action {
  readonly type = ActionTypes.AddCustomVideo;
}

export class GetCustomVideo implements Action {
  readonly type = ActionTypes.GetCustomVideo;
 
  constructor(public payload: WholeVideoData) {}
} 

export class DeleteCustomVideo implements Action {
  readonly type = ActionTypes.DeleteCustomVideo;
}
 

 
export type CustomVideoActions = AddCustomVideo | GetCustomVideo | DeleteCustomVideo;