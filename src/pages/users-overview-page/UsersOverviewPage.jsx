import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { fetchUsers } from '../../redux/users/users.actions';
import { selectUsersList } from '../../redux/users/users.selectors';
import { selectIsLoading } from '../../redux/app/app.selectors';

import { Loader } from '../../components/loader/Loader';
import User from '../../components/user/User';

const UsersOverviewContainer = styled.div`
  min-height: 300px;
  margin: 0 0 0 100px;
`;

const PageTitle = styled.h1`
  font-size: 1.9em;
  font-weight: 400;
  line-height: 1.3;
  margin: 0.25em 3em 0;
`;

const UsersList = styled.ul`
  margin: 0;
  padding: 2em;
  text-align: center;
`;

class UsersOverviewPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users, isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <UsersOverviewContainer>
        <PageTitle>Users Overview</PageTitle>
        <UsersList>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </UsersList>
      </UsersOverviewContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

const mapStateToProps = createStructuredSelector({
  users: selectUsersList,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersOverviewPage);
