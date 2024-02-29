import React from 'react';
import { Grid } from '@mui/material';

export const ProductHeader = () => {
  return (
    <Grid
      container
      sx={{ mt: 1, ml: 1, mr: '5%', mb: 2 }}
    >
      <Grid
        item
        sx={{ width: '25%', flexShrink: 0 }}
      >
        id
      </Grid>
      <Grid
        item
        sx={{ width: '34%', flexShrink: 0 }}
      >
        Название
      </Grid>
      <Grid
        item
        sx={{ width: '17.5%', flexShrink: 0 }}
      >
        Цена
      </Grid>
      <Grid
        item
        sx={{ width: '17.5%', flexShrink: 0 }}
      >
        Бренд
      </Grid>
    </Grid>
  );
};
