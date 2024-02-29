import { LAST_PAGE, NEXT_PAGE } from '../../../shared/constants/constants';

export const useHandleChangePage = (setFilterPage, setPage, filterProduct) => {
  const handleChange = value => {
    if (filterProduct.length > 50) {
      if (value === NEXT_PAGE) {
        setFilterPage(prPage => prPage + 1);
      }
      if (value === LAST_PAGE) {
        setFilterPage(prPage => prPage - 1);
      }
    } else {
      if (value === NEXT_PAGE) {
        setPage(page => page + 1);
      }
      if (value === LAST_PAGE) {
        setPage(page => page - 1);
      }
    }
    if (value === NEXT_PAGE) {
      setPage(page => page + 1);
    }
    if (value === LAST_PAGE) {
      setPage(page => page - 1);
    }
  };
  return handleChange;
};
