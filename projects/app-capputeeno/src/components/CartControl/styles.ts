'use client';

import { styled } from 'styled-components';

export const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 1rem;

    background-color: var(--delete-color);
    color: white;

    margin-left: -1rem;
`;

export const Container = styled.div`
    position: relative;
    cursor: pointer;
`;
