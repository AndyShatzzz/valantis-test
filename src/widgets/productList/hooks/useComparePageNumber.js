import { useState } from 'react';
import { END_PAGE, PAGINATION_PAGE, START_PAGE } from '../../../shared/constants/constants';

export const useComparePageNumber = () => {
  const [prPage, setPrPage] = useState(true);
  const [nextPage, setNextPage] = useState(false);
  const comparePageNumber = (filterProduct, filterPage, page) => {
    if (filterProduct.length > 0) {
      if (filterProduct.length / PAGINATION_PAGE > filterPage) {
        setNextPage(false);
      } else {
        setNextPage(true);
      }
    } else {
      if (page < END_PAGE) {
        setNextPage(false);
      } else {
        setNextPage(true);
      }
    }
    if (filterPage > START_PAGE || page > START_PAGE) {
      setPrPage(false);
    } else {
      setPrPage(true);
    }
  };
  return [prPage, nextPage, comparePageNumber];
};
