export const useHandleChangePage = (setFilterPage, setPage, filterProduct) => {
  const handleChange = value => {
    if (filterProduct.length > 50) {
      if (value === 'Следующая страница') {
        setFilterPage(prPage => prPage + 1);
      }
      if (value === 'Предыдущая страница') {
        setFilterPage(prPage => prPage - 1);
      }
    } else {
      if (value === 'Следующая страница') {
        setPage(page => page + 1);
      }
      if (value === 'Предыдущая страница') {
        setPage(page => page - 1);
      }
    }
    if (value === 'Следующая страница') {
      setPage(page => page + 1);
    }
    if (value === 'Предыдущая страница') {
      setPage(page => page - 1);
    }
  };
  return handleChange;
};
