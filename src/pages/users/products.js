import { Button, Grid, styled, Typography, useTheme } from '@mui/material';
import UserModal from 'components/modals/userModal';
import UserCard from 'components/userCard/userCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPRODUCTs } from 'stores/products/actions';

const Products = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const products = useSelector(state => state.products?.data?.data);
  const showUserModal = useSelector(state => state.helper.userModal.show);
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    dispatch(getAllPRODUCTs());
  }, []);

  const StyledGrid = styled(Grid)`
    width: 60%;
    margin: auto;
  `;
  const Stlyledh1 = styled(Typography)`
    color: ${theme.palette.primary.main};
    font-size: 24px;
  `;
  const BackButton = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 25%);
    padding: 10px 16px;
    border-radius: 12px;
    position: absolute;
    top: 20px;
    left: 50px
  `;
  return (
    <Grid style={{ position: 'relative' }} container>
      <BackButton to="/" variant="contained" color="primary">
        بازگشت
      </BackButton>
      {showUserModal ? <UserModal isProduct /> : null}
      <Grid container justifyContent="center">
        <Stlyledh1>Products</Stlyledh1>
      </Grid>
      <Grid container justifyContent="center">
        {!filtered ? (
          <Button
            onClick={() => setFiltered(true)}
            style={{ marginTop: '25px' }}
            variant="contained">
            فقط محصولات قبل از 2004 را نشان بده
          </Button>
        ) : (
          <Button
            onClick={() => setFiltered(false)}
            style={{ marginTop: '25px' }}
            variant="outlined">
            پاک کردن فیلتر
          </Button>
        )}
      </Grid>
      <StyledGrid container justifyContent="center" spacing={2}>
        {filtered
          ? products
              ?.filter(f => f.year < 2004)
              .map(e => <UserCard isProduct key={e.id} user={e} />)
          : products?.map(e => <UserCard isProduct key={e.id} user={e} />)}
      </StyledGrid>
    </Grid>
  );
};

export default Products;
