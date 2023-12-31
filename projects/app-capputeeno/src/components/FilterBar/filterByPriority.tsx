import { ArrowIcon } from '../icons';
import * as S from './styles';
import { useFilter } from '@/hooks/useFilter';
import { FiltePriority } from '@/types/enum/filter';
import { useToggle } from '@/hooks/useToogle';

export const FilterByPriority = () => {
    const { open, setToggle } = useToggle(false);
    const { priority, setPriority } = useFilter();

    const handleUpdatePriority = (priority: FiltePriority) => {
        setPriority(priority);
        setToggle(false);
    };

    return (
        <S.FilterByPriorityContainer data-open={open}>
            <button type="button" onClick={() => setToggle(!open)}>
                Organizar por <ArrowIcon />
            </button>
            {open ? (
                <S.FilterByPrioritys>
                    <S.FilterByPrioritysItem
                        data-slected={priority === FiltePriority.NEWS}
                        onClick={() => handleUpdatePriority(FiltePriority.NEWS)}
                    >
                        Novidades
                    </S.FilterByPrioritysItem>
                    <S.FilterByPrioritysItem
                        data-slected={priority === FiltePriority.BIGGEST_PRICE}
                        onClick={() =>
                            handleUpdatePriority(FiltePriority.BIGGEST_PRICE)
                        }
                    >
                        Preço: maior menor
                    </S.FilterByPrioritysItem>
                    <S.FilterByPrioritysItem
                        data-slected={priority === FiltePriority.MINOR_PRICE}
                        onClick={() =>
                            handleUpdatePriority(FiltePriority.MINOR_PRICE)
                        }
                    >
                        Preço: menor maior
                    </S.FilterByPrioritysItem>
                    <S.FilterByPrioritysItem
                        data-slected={priority === FiltePriority.POPULARITY}
                        onClick={() =>
                            handleUpdatePriority(FiltePriority.POPULARITY)
                        }
                    >
                        Mais vendidos
                    </S.FilterByPrioritysItem>
                </S.FilterByPrioritys>
            ) : null}
        </S.FilterByPriorityContainer>
    );
};
