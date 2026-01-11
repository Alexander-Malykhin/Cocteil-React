import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '@/app/store/store.ts';
//slice
import {close} from '@widgets/Header/models/slice.ts'

export const useNavigationOutsideClick = () => {
    const dispatch = useDispatch();
    const navRef = useRef<HTMLElement | null>(null);

    const isOpen = useSelector(
        (state: RootState) => state.navigation.isOpen
    );

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node)
            ) {
                dispatch(close());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = "";
        };
    }, [isOpen, dispatch]);

    return {navRef, isOpen};
};
