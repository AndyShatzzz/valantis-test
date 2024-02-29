import { START_PAGE } from '../../../shared/constants/constants';

export const useHandleResetFilter = (
  setFilterPage,
  setPage,
  reset,
  getValues,
  setFilterProduct,
  setProducts,
  getProducts
) => {
  const handleResetFilter = () => {
    setFilterPage(START_PAGE);
    setPage(START_PAGE);
    reset({
      text: '',
      filter: getValues('filter')
    });
    setFilterProduct([]);
    setProducts([]);
    getProducts();
  };
  return handleResetFilter;
};
