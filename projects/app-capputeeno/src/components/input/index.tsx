import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

import { SearchIcon } from '../icons/search-icon';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon({
    handleChange,
    value,
    ...props
}: InputProps) {
    return (
        <S.InputContainer>
            <S.PrimaryInput
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(event.target.value)
                }
                {...props}
            />
            <SearchIcon />
        </S.InputContainer>
    );
}
