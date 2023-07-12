export interface PaginationContextProviderProps {
    children: React.ReactNode;
}

export interface PaginationContextProps {
    maxPage: number;
    minPage: number;
    page: number;
    totalPage: number;
    handleNextPage?: () => void;
    handlePrevPage?: () => void;
    setPage: (value: number) => void;
}
