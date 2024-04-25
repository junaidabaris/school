
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { Box, Tab } from "@mui/material";
import { useState } from 'react';
import GeneralSetting from '../../../componets/settings/globalSetting/GeneralSetting';
import { ThemeSetting } from '../../../componets/settings/globalSetting/ThemeSetting';
import { LogoSetting } from '../../../componets/settings/globalSetting/LogoSetting';
import { FileSetting } from '../../../componets/settings/globalSetting/FileSetting';

export default function GlobalSetting() {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='' id='newCard' style={{ margin: "20px" }}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="General Settings" value="1" />
                            <Tab label="Theme Settings" value="2" />
                            <Tab label="Logo" value="3" />
                            <Tab label="Upload file settings" value="4" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><GeneralSetting/></TabPanel>
                    <TabPanel value="2"><ThemeSetting/></TabPanel>
                    <TabPanel value="3"><LogoSetting/></TabPanel>
                    <TabPanel value="4"><FileSetting/></TabPanel>
                </TabContext>
            </Box>
        </div>
    );
}