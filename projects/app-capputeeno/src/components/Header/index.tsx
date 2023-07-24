'use client';

import { useFilter } from '@/hooks/useFilter';

import { Logo } from '../Logo';
import { PrimaryInputWSearchIcon } from '../input';
import * as S from './styles';
import { CartControl } from '../CartControl';

export const Header = () => {
    const { search, setSearch } = useFilter();
    return (
        <S.Wrapper>
            <Logo />
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"
                />
                <CartControl />
            </div>
        </S.Wrapper>
    );
};
