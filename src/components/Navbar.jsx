import { useState } from "react";
import { AppBar, IconButton, Tab, Tabs, Toolbar, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import AppleIcon from "@mui/icons-material/Apple";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/WorkOutline";
import AppDrawer from "./AppDrawer";


const TABS = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support"
];

const MyAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.grey[100]
}));

const MyTab = styled(Tab)(() => ({
    fontSize: 12,
    fontWeight: 700
}));

export default function Navbar() {
    const theme = useTheme();
    const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
    const [tabIndex, setTabIndex] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleTabChange = (e, newVal) => setTabIndex(newVal);
    const showDrawer = () => setOpenDrawer(true);
    const closeDrawer = () => setOpenDrawer(false);

    return (
        <MyAppBar
            elevation={0}>
            <Toolbar
                sx={{ justifyContent: matchesLg ? "space-between" : "center" }}
                variant="dense">
                <IconButton>
                    <AppleIcon
                        fontSize="small" />
                </IconButton>
                {!matchesLg &&
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="secondary">
                        {TABS.map(t => (
                            <MyTab
                                key={t}
                                label={t} />
                        ))}
                    </Tabs>}
                <div>
                    {matchesLg &&
                        <AppDrawer
                            open={openDrawer}
                            onOpen={showDrawer}
                            onClose={closeDrawer}
                            TABS={TABS} />}
                    <IconButton>
                        <SearchIcon
                            fontSize="small"
                            sx={{ mx: 1 }} />
                    </IconButton>
                    <IconButton>
                        <WorkIcon
                            fontSize="small" />
                    </IconButton>
                </div>
            </Toolbar>
        </MyAppBar>
    );
}