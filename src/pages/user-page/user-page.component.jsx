import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useAuthContext} from '../../providers/auth-provider';

function UserPage() {
  const {currentUser, signOut} = useAuthContext();
  const history = useHistory();

  return (
    <Fragment>
      <Container>
        <List>
          <ListItem>
            <ListItemText primary={`HELLO, ${currentUser.email.toUpperCase()}`}/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="PROFILE"/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="LOGOUT" onClick={() => {
              signOut().then(() => history.push('/signin'));
            }}/>
          </ListItem>
        </List>
      </Container>
    </Fragment>
  );
};

export default UserPage;
