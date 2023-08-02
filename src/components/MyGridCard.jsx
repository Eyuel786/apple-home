import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyCardLink from "./MyCardLink";
import AppleIcon from "@mui/icons-material/Apple";


const MainContainer = styled("div", {
    shouldForwardProp: props => props !== "bgImage"
})(({ bgImage }) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "60vh",
    position: "relative",
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
}));

const TextContent = styled("div", {
    shouldForwardProp: props => props !== "color" && props !== "top"
})(({ color, top }) => ({
    position: "absolute",
    left: "50%",
    top: top || "9%",
    color,
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
}));

const TitleContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: 0,
}));

const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    fontSize: "1.99rem",
    fontWeight: 600
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h6,
    fontSize: "1.2rem"
}));

const LinksContainer = styled("div")(() => ({
    marginTop: "0.5rem",
    display: "flex",
    gap: "20px"
}));

export default function MyGridCard(props) {
    const {
        bgImage,
        color,
        title,
        top,
        appleIcon,
        subtitle,
        links
    } = props;

    return (
        <MainContainer
            bgImage={bgImage}>
            <TextContent
                color={color}
                top={top}>
                <TitleContainer>
                    {appleIcon &&
                        <AppleIcon fontSize="large" />}
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
                <Subtitle>
                    {subtitle}
                </Subtitle>
                <LinksContainer>
                    {links.map(linkText => (
                        <MyCardLink
                            linkText={linkText}
                            fontSize="18px" />
                    ))}
                </LinksContainer>
            </TextContent>

        </MainContainer>
    );
}