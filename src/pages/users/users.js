import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from 'stores/users/actions';
import UserCard from 'components/userCard/userCard';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import UserModal from 'components/modals/userModal';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const users = useSelector(state => state.users.data.data);
  const showUserModal = useSelector(state => state.helper.userModal.show);

  const StyledGrid = styled(Grid)`
    width: 60%;
    margin: auto;
  `;
  const Stlyledh1 = styled(Typography)`
    color: ${theme.palette.primary.main};
    font-size: 24px;
  `;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
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
      {showUserModal ? <UserModal /> : null}
      <Grid container justifyContent="center">
        <Stlyledh1>Users</Stlyledh1>
      </Grid>
      <StyledGrid container justifyContent="center" spacing={2}>
          <UserCard user={!isEmpty(users) ? users?.filter(f=> f?.email === 'emma.wong@reqres.in')[0] : {}} />
      </StyledGrid>
      <StyledGrid container justifyContent="center" spacing={2}>
        {users?.filter(f=> f.email !== 'emma.wong@reqres.in')?.map(e => (
          <UserCard key={e.id} user={e} />
        ))}
      </StyledGrid>
    </Grid>
  );
};

export default Users;
