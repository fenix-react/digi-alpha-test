import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Paper, Typography, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { openUserModal } from 'stores/helper/actions';

const UserCard = ({ user, isProduct }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const StyledPaper = styled(Paper)`
    border-radius: 12px;
    background-color: ${user?.color ? user?.color : theme.palette.primary.main};
    padding: 20px;
    height: auto;
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 25%);
    cursor: pointer;
    margin: 20px 20px;
    text-align: center;
    position: relative;
  `;
  const StyledH2 = styled(Typography)`
    color: ${theme.palette.common.white};
    text-align: start;
  `;
  const StyledH1 = styled(Typography)`
    color: ${isProduct ? `#000` : `#9185be`};
    margin-top: 15px;
  `;
  const StyledBtn = styled(Button)`
    background-color: #9185be;
    color: ${theme.palette.common.white};
    border-radius: 14px;
    margin-top: 20px;
    width: 120px;
    &:hover {
      background-color: #e5e5e5;
      color: ${user?.color ? user?.color : theme.palette.primary.main};
    }
  `;
  const Badge = styled(Paper)`
    position: absolute;
    top: -15px;
    left: -15px;
    width: 60px;
    height: 60px;
    background-color: ${theme.palette.common.white};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 40%);
  `;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <StyledPaper>
        {user.email === 'emma.wong@reqres.in' && <Badge>Admin</Badge>}
        {user?.avatar ? (
          <img
            style={{ width: '30%', borderRadius: '100%' }}
            alt="avatar"
            src={user?.avatar}
          />
        ) : null}
        <Grid container justifyContent="start">
          <StyledH1>{isProduct ? 'Name' : 'Full Name: '}</StyledH1>
        </Grid>
        <Grid container justifyContent="start">
          {isProduct ? (
            <StyledH2>
              {user?.name}
            </StyledH2>
          ) : (
            <StyledH2>
              {user?.first_name} {user?.last_name}
            </StyledH2>
          )}
        </Grid>
        <Grid container justifyContent="start">
          <StyledH1>{isProduct ? 'Year: ' : 'Email: '}</StyledH1>
        </Grid>
        <Grid container justifyContent="start">
          <StyledH2>{isProduct ? user?.year : user?.email}</StyledH2>
        </Grid>
        {isProduct && <>
        <Grid container justifyContent="start">
          <StyledH1>pantone_value: </StyledH1>
        </Grid>
        <Grid container justifyContent="start">
          <StyledH2>{user?.pantone_value}</StyledH2>
        </Grid>
        </>}
        <Grid container justifyContent="center">
          <StyledBtn onClick={() => dispatch(openUserModal(user))}>
            Detail
          </StyledBtn>
        </Grid>
      </StyledPaper>
    </Grid>
  );
};

export default UserCard;
