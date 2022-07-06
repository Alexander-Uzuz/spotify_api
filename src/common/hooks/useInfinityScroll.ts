import {useState, useEffect} from 'react';

export const useInfinityScroll = () => {
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
    
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const handleScroll = (e: any) => {
        if (
          e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) <
          100
        ) {
          setLoadingData(true);
        }
      };


  return {loadingData, setLoadingData}
}