import React from 'react';

function TabPanel(props) {
  const {children, value, index, ...other} = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`mui-tabpanel-${index}`}
      aria-labelledby={`mui-tab-${index}`}
      {...other}>
      {value === index && (<div>{children}</div>)}
    </div>
  );
}
  
export function a11yProps(index) {
  return {
    'id': `mui-tab-${index}`,
    'aria-controls': `mui-tabpanel-${index}`,
  };
}

export default TabPanel;
