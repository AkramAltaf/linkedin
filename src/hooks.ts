import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

// Use this throughout your app instead of plain `useDispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;
