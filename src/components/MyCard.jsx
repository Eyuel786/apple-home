import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MyCardLink from "./MyCardLink";


const MainContainer = styled("div", {
    shouldForwardProp: props => props !== "bgImage"
})(({ bgImage }) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "80vh",
    width: "100vw",
    position: "relative",
    marginRight: "8px",
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
}));

const TextContent = styled("div", {
    shouldForwardProp: props => props !== "color"
})(({ color }) => ({
    position: "absolute",
    left: "50%",
    top: "9%",
    color,
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}));

const Title = styled(Typography)(({ theme }) => ({
    ...theme.typography.h2,
    fontSize: "3.2rem",
    fontWeight: 600
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    ...theme.typography.h4,
    fontSize: "1.7rem"
}));

const LinksContainer = styled("div")(() => ({
    marginTop: "1.7rem",
    display: "flex",
    gap: "20px"
}));

export default function MyCard(props) {
    const { bgImage, title, subtitle, color } = props;

    return (
        <MainContainer
            bgImage={bgImage}>
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