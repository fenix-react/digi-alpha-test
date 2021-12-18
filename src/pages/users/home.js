import { Grid, styled, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const StyledLink = styled(Link)`
    font-size: 45px;
    text-decoration: none;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 25%);
    padding: 10px 16px;
    border-radius: 12px;
    margin: 50px 0 12px
  `;
  return (
    <Grid container justifyContent="center">
      <Grid container justifyContent="center">
        <StyledLink to="/users">Users</StyledLink>
      </Grid>
      <Grid container justifyContent="center">
        <StyledLink to="/products">Products</StyledLink>
      </Grid>
      <Grid container justifyContent="center">
        <StyledLink to="/coins">Coin Prices</StyledLink>
      </Grid>
    </Grid>
  );
};

export default Home;
