import { videoStateMock } from '../mockData';
import { selectYouTubeVideoState, getItems } from './youTube.selector';

describe('Youtube videos selectors', () => {
    it('should select youTube videos state', () => {
        expect(selectYouTubeVideoState(videoStateMock)).toEqual(videoStateMock.youTubeVideos);
    });
    it('should select youTube video list from state', () => {
        expect(getItems.projector(videoStateMock.youTubeVideos)).toEqual(videoStateMock.youTubeVideos.videoList);
    });
});