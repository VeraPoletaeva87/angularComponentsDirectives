
import { customVideoReducer } from './videoList.reducer';
import { initialState, State } from '../state.models';
import * as videoListActions from '../actions/videoList.actions';
import { mockData } from '../mockData';

describe('BooksReducers', () => {
    let initState: State;
    beforeEach(() => {
        initState = { ...initialState };
    });

    it('should change state when add custom video to list', () => {
        const result = customVideoReducer(initState.customVideos, videoListActions.AddCustomVideo({item: mockData}));

        expect(result).toEqual({
            videoList: [mockData]
        });
    });

    it('should change state when delete custom video from list', () => {
        const result = customVideoReducer(
            initState.customVideos,
            videoListActions.DeleteCustomVideo({
                id: 'fsdhjkf3242bnmb'
            })
        );
        expect(result).toEqual({
            videoList: []
        });
    });
});