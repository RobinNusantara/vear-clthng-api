import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {useAuthContext} from '../../providers/auth-provider';
import {StyledListItemText} from './user-page.styles';

function UserPage() {
  const {currentUser, signOut} = useAuthContext();
  const history = useHistory();

  return (
    <Fragment>
      <Container>
        <List>
          <ListItem>
            <StyledListItemText disableTypography primary={`hello, ${currentUser.email}`}/>
          </ListItem>
          <ListItem button>
            <StyledListItemText disableTypography primary="my profile"/>
          </ListItem>
          <ListItem button>
            <StyledListItemText disableTypography primary="my orders"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <StyledListItemText
              disableTypography
              primary="logout"
              onClick={() => {
                signOut().then(() => history.push('/signin'));
              }}/>
          </ListItem>
        </List>
      </Container>
    </Fragment>
  );
};

export default UserPage;
