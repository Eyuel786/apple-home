import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary: {
            main: "#fff"
        },
        secondary: {
            main: "#000"
        }
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiListItemButton: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    },
    typography: {
        fontFamily: "Inter",
        allVariants: {
            textTransform: "none"
        }
    }
});