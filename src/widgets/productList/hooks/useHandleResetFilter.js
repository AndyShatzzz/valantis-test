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
    setFilterPage(1);
    setPage(1);
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
