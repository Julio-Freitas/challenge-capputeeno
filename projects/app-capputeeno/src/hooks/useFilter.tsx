import { FilterContext } from '@/context/filterContext';
import { useContext } from 'react';

export const useFilter = () => useContext(FilterContext);
