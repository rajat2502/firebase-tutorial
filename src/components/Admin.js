import React, { Fragment, Component } from "react";

import { withFirebase } from './Firebase';

class Admin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }))
      this.setState({
        users: usersList,
        loading: false
      })
    })
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <h1>Admin</h1>
        {loading && <div>Loading...</div>}
        <UserList users = {users} />
      </Fragment>
    );
  }
};

const UserList = ({ users }) => {
  return (
    <ul>
      {
        users.map(user => (
          <li key={user.uid}>
            <p>
              <strong>ID: </strong> {user.uid}
            </p>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
            <p>
              <strong>Username: </strong> {user.username}
            </p>
          </li>
        ))
      }
    </ul>
  )
}

export default withFirebase(Admin);
