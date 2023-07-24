import Link from 'next/link';
import { BackIcon } from '../icons/back-icon';
import * as S from './styles';
import { BackButtonProps } from './type';

export const BackButton = ({ href, ...props }: BackButtonProps) => (
    <S.Wrapper>
        <Link passHref href={href ?? '/'} {...props}>
            <BackIcon />
            Voltar
        </Link>
    </S.Wrapper>
);
