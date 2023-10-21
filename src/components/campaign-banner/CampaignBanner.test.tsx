import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../../app/App';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

let banner: Element | null;

beforeEach(() => {
  const { container } = render(<App />);
  banner = container.querySelector(`[data-testid="${TestElement.CAMPAIGN_BANNER}"]`);
});

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const style = getComputedStyle(banner as Element);

    expect(banner).toHaveStyle({
      display: 'flex',
      position: 'absolute',
      flexDirection: 'column',
      textAlign: 'center',
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: `${gameConfig.campaignBanner.borderRadius}px`,
      width: gameConfig.campaignBanner.width,
      padding: `${gameConfig.campaignBanner.padding}px`,
      background: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    //
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    //
  });
});
