import { useState } from 'react';

export const useComparePageNumber = () => {
  const [prPage, setPrPage] = useState(true);
  const [nextPage, setNextPage] = useState(false);
  const comparePageNumber = (filterProduct, filterPage, page) => {
    if (filterProduct.length > 0) {
      console.log(Math.floor(filterProduct.length / 50) > filterPage);
      if (filterProduct.length / 50 > filterPage) {
        setNextPage(false);
      } else {
        setNextPage(true);
      }
    } else {
      if (page < 161) {
        setNextPage(false);
      } else {
        setNextPage(true);
      }
    }
    if (filterPage > 1 || page > 1) {
      setPrPage(false);
    } else {
      setPrPage(true);
    }
  };
  return [prPage, nextPage, comparePageNumber];
};
