import * as youTube from './youTube.actions';
import { mockData } from '../mockData';

describe('YouTubeActions', () => {

    it('should create an action to delete video from favorites', () => {
        const expectedAction = {
            id: 'custom1',
            type: youTube.DeleteFromFavorites.type
        };
        const action = youTube.DeleteFromFavorites({id: 'custom1'});
        expect(action).toEqual(expectedAction);
    });
    it('should create an action to add video to favorites', () => {
        const expectedAction = {
            item: mockData,
            type: youTube.AddToFavorites.type
        };
        const action = youTube.AddToFavorites({item: mockData});
        expect(action).toEqual(expectedAction);
    });
});