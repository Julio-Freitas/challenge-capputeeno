'use client';

import { Saira_Stencil_One } from 'next/font/google';
import * as S from './styles';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
});

export const Logo = () => (
    <S.Logo className={sairaStencil.className}>Capputeeno</S.Logo>
);
