import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestElement } from '../../enums/TestElement';
import { App } from '../../app/App';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

beforeAll(() => {});

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    let gameBox: Element | null;
    const { container } = render(<App />);
    gameBox = container.querySelector(`[data-testid="${TestElement.GAME_BOX}"]`);

    expect(gameBox).toHaveStyle({
      width: `${gameConfig.container.maxWidth}px`,
      height: `${gameConfig.container.maxHeight}px`,
    });
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 300,
    });

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });

    fireEvent.resize(window);

    let gameBox: Element | null;
    const { container } = render(<App />);
    gameBox = container.querySelector(`[data-testid="${TestElement.GAME_BOX}"]`);

    expect(gameBox).toHaveStyle({
      width: `300px`,
    });
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1000,
    });

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 600,
    });

    fireEvent.resize(window);

    let gameBox: Element | null;
    const { container } = render(<App />);
    gameBox = container.querySelector(`[data-testid="${TestElement.GAME_BOX}"]`);

    expect(gameBox).toHaveStyle({
      height: `600px`,
    });
  });
});
