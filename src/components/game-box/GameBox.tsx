import React, { ReactNode, useEffect, useState } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

interface Props {
  children: ReactNode;
}

const MAX_WIDTH = gameConfig.container.maxWidth;
const MAX_HEIGHT = gameConfig.container.maxHeight;

export const GameBox = ({ children }: Props) => {
  const [width, setWidth] = useState(Math.min(window.innerWidth, MAX_WIDTH));
  const [height, setHeight] = useState(Math.min(window.innerHeight, MAX_HEIGHT));

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currentWidth = window.innerWidth;

      if (currentWidth >= MAX_WIDTH) {
        setWidth(MAX_WIDTH);
        setHeight(MAX_HEIGHT);
      } else {
        setWidth(currentWidth);
        setHeight((MAX_HEIGHT / MAX_WIDTH) * currentWidth);
      }
    });
  }, []);

  return (
    <ContainerStyled style={{ width: `${width}px`, height: `${height}px` }} data-testid={TestElement.GAME_BOX}>
      {children}
    </ContainerStyled>
  );
};
