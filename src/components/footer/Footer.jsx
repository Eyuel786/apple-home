import { Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FooterGrid from "./FooterGrid";
import FooterTexts from "./FooterTexts";


const MainContainer = styled("div")(({ theme }) => ({
    background: theme.palette.grey[100],
    marginTop: "0.5rem",
    padding: "1rem 0",
}));

const ContentContainer = styled("div")(({ theme }) => ({
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
        width: "95%"
    }
}));

const MyLink = styled("a")(() => ({
    color: "#2997ff",
    textDecoration: "underline",
    "&:hover": {
        cursor: "pointer"
    }
}));

const MutedText = styled(Typography)(({ theme }) => ({
    fontSize: "0.8rem",
    color: theme.palette.text.secondary
}));

const MutedLink = styled("a")(() => ({
    "&:hover": {
        cursor: "pointer",
        textDecoration: "underline"
    }
}));

export default function Footer() {

    return (
        <MainContainer>
            <ContentContainer>
                <FooterTexts />
                <Divider sx={{ mb: 3 }} />
                <FooterGrid />
                <MutedText sx={{ mt: 3 }}>
                    More ways to shop: <MyLink>Find an Apple Store</MyLink> or {" "}
                    <MyLink>other retailer</MyLink> near you. Or call 1-800-MY-APPLE.
                </MutedText>
                <Divider sx={{ my: 1 }} />
                <Grid
                    container
                    justifyContent="space-between"
                    rowSpacing={1}>
                    <Grid item>
                        <MutedText>
                            Copyright © 2023 Apple Inc. All rights reserved.
                        </MutedText>
                    </Grid>
                    <Grid item>
                        <div
                            style={{
                                display: "flex",
                                gap: "6px",
                                flexWrap: "wrap"
                            }}>
                            <MutedLink>
                                <MutedText>
                                    Privacy Policy
                                </MutedText>
                            </MutedLink>
                            {" | "}
                            <MutedLink>
                                <MutedText>
                                    Terms of Use
                                </MutedText>
                            </MutedLink>
                            {" | "}
                            <MutedLink>
                                <MutedText>
                                    Sales and Refunds
                                </MutedText>
                            </MutedLink>
                            {" | "}
                            <MutedLink>
                                <MutedText>
                                    Legal
                                </MutedText>
                            </MutedLink>
                            {" | "}
                            <MutedLink>
                                <MutedText>
                                    Site Map
                                </MutedText>
                            </MutedLink>
                        </div>
                    </Grid>
                    <Grid item>
                        <MutedText>United States</MutedText>
                    </Grid>
                </Grid>
            </ContentContainer>
        </MainContainer >
    );
}