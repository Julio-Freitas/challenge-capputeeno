"use client"

import { CartControl } from "../CartControl";
import { Logo } from "../Logo";
import { PrimaryInputWSearchIcon } from "../input";
import * as S from './styles'

export const Header = () => (
    <S.Wrapper>
        <Logo />
        <div>
            <PrimaryInputWSearchIcon
                value={""}
                handleChange={console.log}
                placeholder="Procurando por algo específico?"
            />
            <CartControl />
        </div>
    </S.Wrapper>
)