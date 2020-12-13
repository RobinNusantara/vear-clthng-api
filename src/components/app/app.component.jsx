import React, {Fragment} from 'react';
import UserPage from '../../pages/user-pages/user-page.component';
import AdminPage from '../../pages/admin-pages/admin-pages.component';

function App() {
  return (
    <Fragment>
      <UserPage/>
      <AdminPage/>
    </Fragment>
  );
}

export default App;
