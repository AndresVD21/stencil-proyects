import { TestWindow } from '@stencil/core/testing';
import { ProgressBar } from './progress-bar';

describe('progress-bar', () => {
  it('should build', () => {
    expect(new ProgressBar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLProgressBarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ProgressBar],
        html: '<progress-bar></progress-bar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
