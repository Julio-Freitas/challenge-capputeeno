import { FiltePriority, FilterType } from '@/types/enum/filter';

export interface FilterContextProviderProps {
    children: React.ReactNode;
}

export interface FilterContextProps {
    search: string;
    page: number;
    type: FilterType;
    priority: FiltePriority;
    setPriority: (value: FiltePriority) => void;
    setSearch: (value: string) => void;
    setPage: (value: number) => void;
    setType: (value: FilterType) => void;
}
