import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";


const Link = styled("a")(() => ({
    color: "#2997ff",
    textDecoration: "none",
    '&:hover': {
        textDecoration: "underline"
    }
}));


export default function HeadText() {
    return (
        <Typography
            color="text.secondary"
            variant="subtitle2"
            align="center"
            sx={{ my: 1, mx: "4rem" }}>
            Get $200–$640 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
            <sup>1</sup>
            <Link>Shop iPhone &gt;</Link>
        </Typography>
    );
}