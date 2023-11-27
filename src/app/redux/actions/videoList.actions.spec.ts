import * as videoList from './videoList.actions';
import { mockData } from '../mockData';

describe('VideoActions', () => {
    it('should create an action to delete custom video', () => {
        const expectedAction = {
            id: 'custom1',
            type: videoList.DeleteCustomVideo.type
        };
        const action = videoList.DeleteCustomVideo({id: 'custom1'});
        expect(action).toEqual(expectedAction);
    });
    it('should create an action to create custom video', () => {
        const expectedAction = {
            item: mockData,
            type: videoList.AddCustomVideo.type
        };
        const action = videoList.AddCustomVideo({item: mockData});
        expect(action).toEqual(expectedAction);
    });
});
