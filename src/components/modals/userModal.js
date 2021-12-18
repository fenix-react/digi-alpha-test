import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  styled,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeUserModal } from 'stores/helper/actions';
import { getSinglePRODUCT } from 'stores/products/actions';
import { getSingleUser } from 'stores/users/actions';

const UserModal = ({ isProduct }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userId = useSelector(state => state.helper.userModal.data);
  const user = useSelector(state => state.users);
  const product = useSelector(state => state.products);

  useEffect(() => {
    if (isProduct) {
      dispatch(getSinglePRODUCT(userId));
    } else {
      dispatch(getSingleUser(userId));
    }
  }, []);

  const Backdrop = styled(Grid)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  `;
  const StyledPaper = styled(Paper)`
    width: 40%;
    height: auto;
    margin: 10vh auto;
    background-color: ${theme.palette.common.white};
    padding: 30px;
    border-radius: 14px;
  `;
  const Title = styled(Typography)`
    color: ${theme.palette.primary.main};
    font-size: 20px;
  `;
  const StyledBtn = styled(Button)`
    background-color: #9185be;
    color: ${theme.palette.common.white};
    border-radius: 14px;
    margin-top: 20px;
    width: 120px;
    &:hover {
      background-color: #e5e5e5;
      color: ${theme.palette.primary.main};
    }
  `;
  return (
    <Backdrop onClick={() => dispatch(closeUserModal())}>
      <StyledPaper onClick={e => e.stopPropagation()}>
        {user?.loading || product?.loading ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : (
          <Grid container>
            {!isProduct ? (
              <Grid container justifyContent="center">
                <img
                  style={{ width: '150px', borderRadius: '15px' }}
                  alt="s"
                  src={user?.singleUser?.data?.avatar}></img>
              </Grid>
            ) : null}
            <Grid justifyContent="space-between" container>
              <Grid container alignItems="center" item xs={4}>
                <Title>{isProduct ? 'Name :' : 'First Name: '}</Title>
              </Grid>
              <Grid
                justifyContent="flex-end"
                container
                alignItems="center"
                item
                xs={4}>
                {isProduct ? (
                  <h2>{product?.singleProducts?.data?.name}</h2>
                ) : (
                  <h2>{user?.singleUser?.data?.first_name}</h2>
                )}
              </Grid>
            </Grid>
            <Grid justifyContent="space-between" container>
              <Grid container alignItems="center" item xs={4}>
                <Title>{isProduct ? 'Color: ' : 'Last Name: '}</Title>
              </Grid>
              <Grid
                justifyContent="flex-end"
                container
                alignItems="center"
                item
                xs={4}>
                {isProduct ? (
                  <div
                    style={{
                      backgroundColor: product?.singleProducts?.data?.color,
                      height: '50px',
                      width: '50px',
                      borderRadius: '12px',
                    }}></div>
                ) : (
                  <h2>{user?.singleUser?.data?.last_name}</h2>
                )}
              </Grid>
            </Grid>
            <Grid justifyContent="space-between" container>
              <Grid container alignItems="center" item xs={4}>
                <Title>{isProduct ? 'Year: ' : 'Email: '}</Title>
              </Grid>
              <Grid
                justifyContent="flex-end"
                container
                alignItems="center"
                item
                xs={4}>
                <h2>{isProduct ? product?.singleProducts?.data?.year : user?.singleUser?.data?.email}</h2>
              </Grid>
            </Grid>
           {isProduct && <Grid justifyContent="space-between" container>
              <Grid container alignItems="center" item xs={4}>
                <Title>pantone_value</Title>
              </Grid>
              <Grid
                justifyContent="flex-end"
                container
                alignItems="center"
                item
                xs={4}>
                <h2>{product?.singleProducts?.data?.pantone_value}</h2>
              </Grid>
            </Grid>}
            <Grid
              container
              style={{ marginTop: '20px' }}
              justifyContent="center">
              <StyledBtn onClick={() => dispatch(closeUserModal())}>
                Close
              </StyledBtn>
            </Grid>
          </Grid>
        )}
      </StyledPaper>
    </Backdrop>
  );
};

export default UserModal;
