import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
afterEach(cleanup);

let button: Element | null;

beforeAll(() => {
  const { container } = render(<StartButton />);
  button = container.querySelector(`[data-testid="${TestElement.START_BUTTON}"]`);
});

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    expect(button).toHaveTextContent(gameConfig.startButton.buttonText);
  });

  it('SHOULD Render StartButton with click event', async () => {
    window.alert = jest.fn();

    fireEvent.click(button as Element);
    expect(window.alert).toBeCalled();
  });
});
