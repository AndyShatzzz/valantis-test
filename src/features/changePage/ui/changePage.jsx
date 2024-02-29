import { Button, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const ChangePage = ({ handleChange, prPage, nextPage }) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ mt: 2, mb: 2 }}
    >
      <Button
        onClick={() => handleChange('Предыдущая страница')}
        disabled={prPage}
      >
        Предыдущая страница
      </Button>
      <Button
        onClick={() => handleChange('Следующая страница')}
        disabled={nextPage}
      >
        Следующая страница
      </Button>
    </Stack>
  );
};

ChangePage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  prPage: PropTypes.any.isRequired, // Adjust the type according to your use case
  nextPage: PropTypes.any.isRequired // Adjust the type according to your use case
};
