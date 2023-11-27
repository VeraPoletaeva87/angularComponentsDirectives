import { videoStateMock } from '../mockData';
import { selectCustomVideoState, getItems } from './videoList.selector';

describe('Custom videos selectors', () => {
    it('should select custom videos state', () => {
        expect(selectCustomVideoState(videoStateMock)).toEqual(videoStateMock.customVideos);
    });
    it('should select custom video list from state', () => {
        expect(getItems.projector(videoStateMock.customVideos)).toEqual(videoStateMock.customVideos.videoList);
    });
});