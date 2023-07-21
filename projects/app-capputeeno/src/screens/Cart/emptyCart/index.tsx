import { BackButton } from '@/components';
import * as S from './styles';
export const EmptyCart = () => (
    <div>
        <BackButton />
        <S.Title>Você não possui produtos no Carrinho</S.Title>
    </div>
);
