'use client';

import { useFilter } from '@/hooks/useFilter';
import { CartControl } from '../CartControl';
import { Logo } from '../Logo';
import { PrimaryInputWSearchIcon } from '../input';
import * as S from './styles';

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
