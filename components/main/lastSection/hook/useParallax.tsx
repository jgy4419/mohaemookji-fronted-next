import {useEffect} from 'react';


const useParallax = (setScrollPosition: any) => {
    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
};

export default useParallax;