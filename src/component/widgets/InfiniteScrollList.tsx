import React, { useEffect, ReactNode } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

interface InfiniteScrollListProps {
    children: ReactNode,
    onReachEnd: Function,
    className: string,
    nextPage: boolean
}

const InfiniteScrollList = (props: InfiniteScrollListProps) => {
    let isFetching = useSelector((state: any) => state.appReducer.isLoading, shallowEqual)

    useEffect(() => {
        window.addEventListener('scroll', onReachEnd);
        function onReachEnd() {
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                props.onReachEnd();
            }
        }
        return () => window.removeEventListener('scroll', onReachEnd);
    }, [props]);

    return (
        <>
            <div
                className={props.className}
            >
                {props.children}
                {props.nextPage && isFetching && 'Fetching more list items...'}
            </div>
        </>
    );
};

export default InfiniteScrollList;