import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userSignOut} from '../../actions/auth.action';
import {authUserSelector} from '../../utils/auth-selectors';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {StyledListItemText} from './profile-page.styles';

function ProfilePage() {
  const dispatch = useDispatch();
  const user = useSelector(authUserSelector);
  const {username} = user;

  const signOut = () => dispatch(userSignOut());

  return (
    <Fragment>
      <Container>
        <List>
          <ListItem>
            <StyledListItemText disableTypography primary={`Hello ${username}`}/>
          </ListItem>
          <ListItem button>
            <StyledListItemText disableTypography primary="my profile"/>
          </ListItem>
          <ListItem button>
            <StyledListItemText disableTypography primary="my orders"/>
          </ListItem>
          <Divider/>
          <ListItem button onClick={signOut}>
            <StyledListItemText disableTypography primary="logout"/>
          </ListItem>
        </List>
      </Container>
    </Fragment>
  );
}

export default ProfilePage;
