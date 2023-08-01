import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRightOutlined";


const Link = styled("a")(() => ({
    color: "#2997ff",
    textDecoration: "none",
    '&:hover': {
        cursor: "pointer",
        textDecoration: "underline"
    }
}));

const LinkTextContainer = styled("span")(() => ({
    display: "flex",
    alignItems: "center",
}));

const LinkText = styled(Typography)(() => ({
    fontSize: "22px"
}));

export default function MyCardLink({ linkText }) {

    return (
        <Link>
            <LinkTextContainer>
                <LinkText>
                    {linkText}
                </LinkText>
                <KeyboardArrowRightIcon />
            </LinkTextContainer>
        </Link>
    );
}