import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const MyDrawer = styled(Drawer)(({ theme }) => ({
    "& .MuiDrawer-paper": {
        background: theme.palette.grey[100]
    }
}));

const MyListItemButton = styled(ListItemButton)(() => ({
    '&:hover': {
        background: "transparent"
    }
}));

const MyListItemText = styled(ListItemText)(() => ({
    fontSize: 22,
    fontWeight: 700,
    fontFamily: "Inter"
}))

export default function AppDrawer(props) {
    const { open, onOpen, onClose, TABS } = props;

    return (
        <>
            <MyDrawer
                anchor="top"
                open={open}
                onClose={onClose}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                    <IconButton
                        onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List
                    sx={{ paddingLeft: "30px" }}>
                    {TABS.map(t => (
                        <MyListItemButton
                            key={t}>
                            <MyListItemText
                                primary={t}
                                disableTypography />
                        </MyListItemButton>
                    ))}
                </List>
            </MyDrawer>
            <IconButton
                onClick={onOpen}
                sx={{ ml: 2 }}>
                <MenuIcon
                    fontSize="small" />
            </IconButton>
        </>
    );
}