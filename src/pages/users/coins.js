import { Grid, styled, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const Coins = () => {
  const theme = useTheme();
  const [socket, setSocket] = useState(null);
  const [assets, setAssets] = useState(['bitcoin', 'ethereum', 'tron', 'usdt']);
  useEffect(() => {
    const newSocket = io(`wss://ws.coincap.io/prices?assets=${assets}`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const Container = styled(Grid)`
    width: 40%;
    margin: auto;
    margin-top: 10vh;
    border-radius: 12px;
    overflow: hidden;
  `;
  const CellGrey = styled(Grid)`
    background-color: #c7b198;
    padding: 15px;
    color: #f5f5f5;
    text-align: center;
    font-weight: bold;
  `;
  const CellPurple = styled(Grid)`
    background-color: #a68dad;
    padding: 15px;
    color: #f0ece3;
    text-align: center;
  `;
  const CellBrown = styled(Grid)`
    background-color: #f0ece3;
    padding: 15px;
    color: #a68dad;
    text-align: center;
  `;
  const BackButton = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 25%);
    padding: 10px 16px;
    border-radius: 12px;
    position: fixed;
    top: 20px;
    left: 50px;
  `;

  return (
    <Container container>
       <BackButton to="/" variant="contained" color="primary">
        بازگشت
      </BackButton>
      <Grid container>
        <CellGrey item xs={6}>
          Coin Name
        </CellGrey>
        <CellGrey item xs={6}>
          Price
        </CellGrey>
      </Grid>
      {assets?.map((e, i) => {
        if (i % 2 === 0) {
          return (
            <Grid container>
              <CellPurple item xs={6}>
                {e}
              </CellPurple>
              <CellPurple item xs={6}>
                16,500 $
              </CellPurple>
            </Grid>
          );
        } else {
          return (
            <Grid container>
              <CellBrown item xs={6}>
                {e}
              </CellBrown>
              <CellBrown item xs={6}>
                12,542 $
              </CellBrown>
            </Grid>
          );
        }
      })}
    </Container>
  );
};

export default Coins;
