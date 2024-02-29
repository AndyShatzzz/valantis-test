import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Grid, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import Preloader from '../../../shared/preloader/ui/Preloader';
import imageLogo from '../../../shared/images/simple-wedding-ring-vector-6728030 (1).jpg';
import PropTypes from 'prop-types';

export const Product = ({ products }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChangeAccordion = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container>
      {products.length !== 0 ? (
        products.map(item => (
          <Accordion
            expanded={expanded === item.id}
            onChange={handleChangeAccordion(item.id)}
            sx={{ width: '100%' }}
            key={item.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Grid
                item
                sx={{ width: '25%', flexShrink: 0 }}
              >
                {item.id}
              </Grid>
              <Grid
                item
                sx={{ width: '35%', flexShrink: 0 }}
              >
                {item.product}
              </Grid>
              <Grid
                item
                sx={{ width: '20%', flexShrink: 0 }}
              >
                {item.price}
              </Grid>
              <Grid
                item
                sx={{ width: '20%', flexShrink: 0 }}
              >
                {item.brand ? item.brand : '-'}
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Avatar
                  src={imageLogo}
                  sx={{ width: '150px', height: '150px' }}
                />
                <Typography>Название: {item.product}</Typography>
                {item.brand && <Typography>Бренд: {item.brand}</Typography>}
                <Typography>Цена: {item.price} рублей</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Preloader />
      )}
    </Grid>
  );
};

Product.propTypes = {
  products: PropTypes.array.isRequired
};
