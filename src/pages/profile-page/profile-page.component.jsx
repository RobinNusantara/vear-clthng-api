import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {StyledListItemText} from './profile-page.styles';

function ProfilePage() {
  return (
    <Fragment>
      <Container>
        <List>
          <ListItem>
            <StyledListItemText disableTypography primary="hello"/>
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
              primary="logout"/>
          </ListItem>
        </List>
      </Container>
    </Fragment>
  );
}

export default ProfilePage;
