import React from 'react';
import AppBarNew from 'material-ui/lib/app-bar-new';

const AppBarExampleIcon = () => (
  <AppBarNew
    title="Title"
    moreIcon={<IconButton key="more"><NavigationExpandMore /></IconButton>}
  />
);

export default AppBarExampleIcon;
