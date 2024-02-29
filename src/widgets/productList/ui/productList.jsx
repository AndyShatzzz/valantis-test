import { Box, Button, MenuItem, Snackbar, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { SnackbarAlert } from '../../../shared/snackbarAlert/ui/snackbarAlert';
import { ProductHeader } from '../../../entities/productHeader';
import { Product } from '../../../entities/product';
import { ChangePage } from '../../../features/changePage';
import { useComparePageNumber } from '../hooks/useComparePageNumber';
import { useHandleChangePage } from '../hooks/useHandleChangePage';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { useGetProducts } from '../hooks/useGetProducts';
import { useHandleResetFilter } from '../hooks/useHandleResetFilter';
import { useFormRegisterState } from '../hooks/useFormRegisterState';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [filterPage, setFilterPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const [prPage, nextPage, comparePageNumber] = useComparePageNumber();
  const handleChange = useHandleChangePage(setFilterPage, setPage, filterProduct);
  const getProducts = useGetProducts(setProducts, page);
  const form = useFormRegisterState();
  const onSubmit = useFormSubmit(
    setFilterPage,
    setPage,
    setProducts,
    setIsSnackbarOpen,
    setErrorMessage,
    setFilterProduct
  );

  const { register, handleSubmit, formState, reset, setValues, getValues } = form;
  const { isSubmitting, errors, isValid } = formState;

  const handleResetFilter = useHandleResetFilter(
    setFilterPage,
    setPage,
    reset,
    getValues,
    setFilterProduct,
    setProducts,
    getProducts
  );

  useEffect(() => {
    comparePageNumber(filterProduct, filterPage, page);
  }, [filterPage, page]);

  useEffect(() => {
    if (filterProduct.length !== 0) {
      setProducts([]);
      const prod = [];
      for (let i = (filterPage - 1) * 50; i < filterPage * 50; i++) {
        if (filterProduct[i] !== undefined) {
          prod.push(filterProduct[i]);
        }
      }
      console.log(filterPage);
      setProducts(prod);
    } else {
      getProducts();
    }
    comparePageNumber(filterProduct, filterPage, page);
  }, [page, filterProduct]);

  return (
    <Box>
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type="text"
          fullWidth
          label="Введите текст фильтра"
          sx={{ mt: 3 }}
          error={errors.text?.message}
          {...register('text', {
            required: {
              value: true,
              message: 'Данное поле для фильтра является обязательным'
            }
          })}
          helperText={errors.text?.message}
        />

        <TextField
          sx={{ mt: 2, width: '200px' }}
          label="Фильтр"
          id="filter"
          defaultValue="product"
          select
          value={getValues('filter')}
          onChange={e => setValues('filter', e.target.value)}
          {...register('filter')}
        >
          <MenuItem value={'product'}>Название</MenuItem>
          <MenuItem value={'price'}>Цена</MenuItem>
          <MenuItem value={'brand'}>Бренд</MenuItem>
        </TextField>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          type="submit"
          disabled={isSubmitting || !isValid}
        >
          Submit
        </Button>
        <Button onClick={handleResetFilter}>Очистить фильтр</Button>
      </Box>
      <ProductHeader />
      <Product products={products} />
      <ChangePage
        handleChange={handleChange}
        prPage={prPage}
        nextPage={nextPage}
      />
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={4000}
        onClose={() => setIsSnackbarOpen(state => !state)}
      >
        <SnackbarAlert
          severity="error"
          onClose={() => setIsSnackbarOpen(state => !state)}
        >
          {errorMessage}
        </SnackbarAlert>
      </Snackbar>
    </Box>
  );
};
