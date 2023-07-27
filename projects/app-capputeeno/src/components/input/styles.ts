'use client';

import { styled } from 'styled-components';

export const PrimaryInput = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg-secondary);

    font-family: inherit;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 22px;
    color: var(--text-dark);

    @media (max-width: 500px) {
        &::placeholder {
            font-size: 1.2rem;
        }
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 332px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
    @media (max-width: 500px) {
        width: 250px;
    }
`;
