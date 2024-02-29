import { productRequest } from '../../../shared/API/productRequest';
import {
  ERR_CODE_400,
  ERR_CODE_500,
  ERR_MESSAGE_400,
  ERR_MESSAGE_NOT_FOUND,
  START_PAGE
} from '../../../shared/constants/constants';

export const useFormSubmit = (
  setFilterPage,
  setPage,
  setProducts,
  setIsSnackbarOpen,
  setErrorMessage,
  setFilterProduct
) => {
  const onSubmit = data => {
    setFilterPage(START_PAGE);
    setPage(START_PAGE);
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
          setErrorMessage(ERR_MESSAGE_NOT_FOUND);
        }

        await setFilterProduct(uniqueProd);
      } catch (err) {
        console.log(err);
        if (err === ERR_CODE_400) {
          setIsSnackbarOpen(true);
          setErrorMessage(ERR_MESSAGE_400);
        } else if (err === ERR_CODE_500) {
          getFilterProducts();
        }
      }
    }
    getFilterProducts();
  };
  return onSubmit;
};
