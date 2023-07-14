import { AnchorHTMLAttributes } from 'react';

export interface BackButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    path?: string;
}
