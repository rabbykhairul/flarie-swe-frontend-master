import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestElement } from '../../enums/TestElement';
import { App } from '../../app/App';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

let gameBox: Element | null;

beforeAll(() => {
  const { container } = render(<App />);
  gameBox = container.querySelector(`[data-testid="${TestElement.GAME_BOX}"]`);
});

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    expect(gameBox).toHaveStyle({
      width: `${gameConfig.container.maxWidth}px`,
      height: `${gameConfig.container.maxHeight}px`,
    });
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    //
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    //
  });
});
