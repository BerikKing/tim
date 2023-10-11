import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={
        { 
            width: '100%' 
            }
        }>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
        onChange={handleChange} 
        aria-label="basic tabs example">
          <Tab label="Күтілуде" 
          {...a11yProps(0)} />
          <Tab label="Қоймада" 
          {...a11yProps(1)} />
          <Tab label=" Жолда" 
          {...a11yProps(2)} />
          <Tab label="Cұрыптау" 
          {...a11yProps(3)} />
          <Tab label="Жеткізілуде" 
          {...a11yProps(4)} />
          <Tab label="Бөлімше" 
          {...a11yProps(5)} />
          <Tab label="Алынды" 
          {...a11yProps(6)} />
        </Tabs>
        
      </Box>
      
    </Box>
  );
}