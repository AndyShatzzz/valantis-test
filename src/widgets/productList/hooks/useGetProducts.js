import { productRequest } from '../../../shared/API/productRequest';

export const useGetProducts = (setProducts, page) => {
  async function getProducts() {
    try {
      setProducts([]);
      const res = await productRequest({ action: 'get_ids', params: { offset: page * 50 - 50, limit: 50 } });
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
