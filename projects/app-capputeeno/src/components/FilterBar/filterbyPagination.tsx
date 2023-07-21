import { ArrowIcon } from '../icons';
import * as S from './styles';

import { usePagination } from '@/hooks/usePagination';

export const FilterByPagination = () => {
    const {
        handleNextPage,
        handlePrevPage,
        maxPage,
        minPage,
        page,
        setPage,
        totalPage
    } = usePagination();

    const totalButtons = [];

    for (let index = 1; index <= totalPage; index++) {
        totalButtons.push(index);
    }

    return (
        <S.ContainerPagination>
            {totalButtons.map((pageNumber) => {
                if (pageNumber <= maxPage && pageNumber > minPage) {
                    return (
                        <button
                            type="button"
                            key={String(pageNumber)}
                            data-active-page={page === pageNumber}
                            onClick={() => setPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    );
                }
            })}

            <button
                type="button"
                data-arrow="left"
                onClick={handlePrevPage}
                disabled={page === 1}
            >
                <ArrowIcon />
            </button>
            <button
                type="button"
                data-arrow="right"
                onClick={handleNextPage}
                disabled={page === totalButtons.length}
            >
                <ArrowIcon />
            </button>
        </S.ContainerPagination>
    );
};
