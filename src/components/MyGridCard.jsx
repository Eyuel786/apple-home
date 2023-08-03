import { Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MyCardLink from "./MyCardLink";
import AppleIcon from "@mui/icons-material/Apple";


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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "80vh",
    position: "relative",
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
    shouldForwardProp: props => props !== "color" && props !== "top"
})(({
    theme,
    color,
    top
}) => ({
    position: "absolute",
    left: "50%",
    top: top || "9%",
    color: color || "#000",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
        width: "70%"
    },
    [theme.breakpoints.down("sm")]: {
        width: "90%"
    }
}));

const TitleContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: 0,
}));

const Title = styled(Typography, {
    shouldForwardProp: props => props !== "color"
})(({ theme, color }) => ({
    ...theme.typography.h4,
    fontSize: "2.4rem",
    fontWeight: 600,
    color: color || "rgba(0,0,0,0.8)",
    [theme.breakpoints.down("lg")]: {
        fontSize: "2rem"
    },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    fontSize: "1.2rem",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.1rem"
    }
}));

const LinksContainer = styled("div")(() => ({
    marginTop: "0.5rem",
    display: "flex",
    gap: "20px"
}));

export default function MyGridCard(props) {
    const theme = useTheme();
    const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));

    const {
        bgImageLg,
        bgImageMd,
        bgImageSm,
        color,
        title,
        top,
        appleIcon,
        subtitle,
        links
    } = props;

    return (
        <MainContainer
            bgImageLg={bgImageLg}
            bgImageMd={bgImageMd}
            bgImageSm={bgImageSm}>
            <TextContent
                color={color}
                top={top}>
                <TitleContainer>
                    {appleIcon &&
                        <AppleIcon
                            fontSize="large"
                            sx={{ color: color || "rgba(0,0,0,0.8)" }} />}
                    <Title
                        color={color}>
                        {title}
                    </Title>
                </TitleContainer>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <LinksContainer>
                    {links.map(linkText => (
                        <MyCardLink
                            key={linkText}
                            linkText={linkText}
                            fontSize={matchesLg ? "16px" : "18px"} />
                    ))}
                </LinksContainer>
            </TextContent>

        </MainContainer>
    );
}