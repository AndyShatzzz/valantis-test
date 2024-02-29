import { productRequest } from '../../../shared/API/productRequest';

export const useFormSubmit = (
  setFilterPage,
  setPage,
  setProducts,
  setIsSnackbarOpen,
  setErrorMessage,
  setFilterProduct
) => {
  const onSubmit = data => {
    setFilterPage(1);
    setPage(1);
    const { filter, text } = data;

    let filterText = text;

    if (filter === 'price') {
      filterText = Number(filterText);
    }

    const myObject = {};

    const dynamicKey = filter;
    myObject[dynamicKey] = filterText;

    async function getFilterProducts() {
      try {
        setProducts([]);
        const res = await productRequest({
          action: 'filter',
          params: myObject
        });
        const uniqueArr = res.result.filter((value, index, self) => self.indexOf(value) === index);
        const result = await productRequest({
          action: 'get_items',
          params: {
            ids: uniqueArr
          }
        });

        const uniqueProd = await result.result.filter(
          (value, index, self) => self.findIndex(obj => obj.id === value.id) === index
        );
        if (uniqueProd.length === 0) {
          setIsSnackbarOpen(true);
          setErrorMessage('По выбранному фильтру ничего не найдено. Пожалуйста, подождите, загружаем первую страничку');
        }

        await setFilterProduct(uniqueProd);
      } catch (err) {
        console.log(err);
        if (err === 'Ошибка 400') {
          setIsSnackbarOpen(true);
          setErrorMessage('Произошла ошибка, проверьте правильность заполнения параметров для фильтра');
        } else if (err === 'Ошибка 500') {
          getFilterProducts();
        }
      }
    }
    getFilterProducts();
  };
  return onSubmit;
};
