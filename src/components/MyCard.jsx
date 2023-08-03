import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyCardLink from "./MyCardLink";


const MainContainer = styled("div", {
    shouldForwardProp: props => props !== "bgImageLg"
        && props !== "bgImageMd" && props !== "bgImageSm"
})(({
    theme,
    bgImageLg,
    bgImageMd,
    bgImageSm
}) => ({
    backgroundImage: `url(${bgImageLg})`,
    WebkitBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "75vh",
    width: "100%",
    position: "relative",
    marginRight: "8px",
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    [theme.breakpoints.down("lg")]: {
        backgroundImage: `url(${bgImageMd})`
    },
    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${bgImageSm})`
    }
}));

const TextContent = styled("div", {
    shouldForwardProp: props => props !== "color"
})(({ color, theme }) => ({
    position: "absolute",
    left: "50%",
    top: "9%",
    width: "50%",
    color,
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        width: "70%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "90%"
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h2,
    fontSize: "3.2rem",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
        fontSize: "2.8rem"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "2rem"
    }
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    fontSize: "1.7rem",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.3rem"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "1rem"
    }
}));

const LinksContainer = styled("div")(() => ({
    marginTop: "1rem",
    display: "flex",
    gap: "20px"
}));

export default function MyCard(props) {
    const {
        bgImageLg,
        bgImageMd,
        bgImageSm,
        title,
        subtitle,
        color
    } = props;

    return (
        <MainContainer
            bgImageLg={bgImageLg}
            bgImageMd={bgImageMd}
            bgImageSm={bgImageSm}>
            <TextContent
                color={color}>
                <Title>
                    {title}
                </Title>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <LinksContainer>
                    <MyCardLink
                        linkText="Learn More" />
                    <MyCardLink
                        linkText="Buy" />
                </LinksContainer>
            </TextContent>
        </MainContainer>
    );
}