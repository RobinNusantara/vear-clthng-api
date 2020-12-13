import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useFirebase} from 'react-redux-firebase';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {StyledListItemText} from './profile-page.styles';


function ProfilePage() {
  const history = useHistory();
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.profile);

  const signOut = () => firebase.logout().then(() => history.push('/signin'));

  return (
    <Fragment>
      <Container>
        <List>
          <ListItem>
            <StyledListItemText disableTypography primary={`hello, ${auth.displayName}`}/>
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
              onClick={signOut}/>
          </ListItem>
        </List>
      </Container>
    </Fragment>
  );
}

export default ProfilePage;
