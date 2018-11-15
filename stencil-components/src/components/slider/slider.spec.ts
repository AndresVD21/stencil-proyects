import { TestWindow } from '@stencil/core/testing';
import { Slider } from './slider';

describe('slider', () => {
  it('should build', () => {
    expect(new Slider()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSliderElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Slider],
        html: '<slider></slider>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
