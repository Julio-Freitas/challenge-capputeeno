'use client';

import { FooterProps } from './types';
import * as S from './styles';

export const FooterRoot = ({ children }: FooterProps) => {
    return <S.Footer>{children}</S.Footer>;
};
