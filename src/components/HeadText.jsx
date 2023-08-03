import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";


const Link = styled("a")(() => ({
    color: "#2997ff",
    textDecoration: "none",
    '&:hover': {
        cursor: "pointer",
        textDecoration: "underline"
    }
}));

const MyText = styled(Typography)(({ theme }) => ({
    margin: "0.5rem auto",
    [theme.breakpoints.down("md")]: {
        width: "95%"
    }
}));


export default function HeadText() {
    return (
        <MyText
            color="text.secondary"
            variant="subtitle2"
            align="center">
            Get $200–$640 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.
            {" "}
            <Link>Shop iPhone &gt;</Link>
        </MyText>
    );
}