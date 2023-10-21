import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    top: gameConfig.campaignBanner.offsetTop,
    borderRadius: gameConfig.campaignBanner.borderRadius,
    width: gameConfig.campaignBanner.width,
    padding: gameConfig.campaignBanner.padding,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,

    '@media(max-width: 800px)': {
      fontSize: '19.75px',
      borderRadius: '12px',
    },

    '@media(max-width: 320px)': {
      fontSize: '20.75px',
      borderRadius: '7px',
    },
  }),
);
