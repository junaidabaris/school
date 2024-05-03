
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Box, Tab } from "@mui/material";
import { useState } from 'react';
import MainPage from '../../../componets/recepAll/config_reception/referencePage/MainPage';
import MainPageres from '../../../componets/recepAll/config_reception/responsePage/MainPageres';
import { Complaint, Response, Visiting, callings } from './mockData';

export default function ConfigReception() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='card' id='newCard' style={{ margin: "40px" }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Reference" value="1" />
                            <Tab label="Response" value="2" />
                            <Tab label="Calling Purpose" value="3" />
                            <Tab label=" Visiting Purpose" value="4" />
                            <Tab label="Complaint Type" value="5" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                       <MainPage/>
                    </TabPanel>
                    <TabPanel value="2">
                       <MainPageres name="Response" data={Response}/>
                    </TabPanel>
                    <TabPanel value="3">
                       <MainPageres name="Calling Purpose" data={callings}/>
                    </TabPanel>
                    <TabPanel value="4">
                       <MainPageres name="Visiting Purpose" data={Visiting}/>
                    </TabPanel>
                    <TabPanel value="5">
                       <MainPageres name="Complaint Type" data={Complaint}/>
                    </TabPanel>
                    
                </TabContext>
            </Box>
        </div>
    );
}