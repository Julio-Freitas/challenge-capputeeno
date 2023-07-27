'use client';

import React, { InputHTMLAttributes, useCallback } from 'react';
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
    const handleChangeInput = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.value),
        [handleChange]
    );

    return (
        <S.InputContainer>
            <S.PrimaryInput
                value={value}
                onChange={handleChangeInput}
                {...props}
            />
            <SearchIcon />
        </S.InputContainer>
    );
}
