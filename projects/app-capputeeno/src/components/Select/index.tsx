import { ArrowIcon } from '../icons';
import * as S from './styles';
import { SelectProps } from './types';

export const Select = ({ value, onChange, ...rest }: SelectProps) => (
    <S.SelectContainer>
        <S.Select {...rest} value={value} onChange={onChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </S.Select>
        <ArrowIcon />
    </S.SelectContainer>
);
