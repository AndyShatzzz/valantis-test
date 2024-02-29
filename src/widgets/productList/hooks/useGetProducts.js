import { productRequest } from '../../../shared/API/productRequest';
import { PAGINATION_PAGE } from '../../../shared/constants/constants';

export const useGetProducts = (setProducts, page) => {
  async function getProducts() {
    try {
      setProducts([]);
      const res = await productRequest({
        action: 'get_ids',
        params: { offset: page * PAGINATION_PAGE - PAGINATION_PAGE, limit: PAGINATION_PAGE }
      });
      const uniqueArr = await res.result.filter((value, index, self) => self.indexOf(value) === index);

      const result = await productRequest({
        action: 'get_items',
        params: {
          ids: uniqueArr
        }
      });

      const uniqueProd = await result.result.filter(
        (value, index, self) => self.findIndex(obj => obj.id === value.id) === index
      );

      await setProducts(uniqueProd);
    } catch (err) {
      console.log(err);
      getProducts();
    }
  }
  return getProducts;
};
