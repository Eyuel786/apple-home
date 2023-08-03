import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItemButton, ListItemText, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";


const FOOTER_LINKS = [
    {
        menu: "Shop and Learn",
        childMenus: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision",
            "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
    },
    {
        menu: "Apple Wallet",
        childMenus: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"]
    },
    {
        menu: "Account",
        childMenus: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"]
    },
    {
        menu: "Entertainment",
        childMenus: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade",
            "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "Apple Store"]
    },
    {
        menu: "Apple Store",
        childMenus: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp",
            "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing",
            "Carrier Deals at Apple", "Order Status", "Shopping Help"]
    },
    {
        menu: "For Business",
        childMenus: ["Apple for Business", "Shop for Business"]
    },
    {
        menu: "For Education",
        childMenus: ["Apple and Education", "Shop for K-12", "Shop for College"]
    },
    {
        menu: "For Healthcare",
        childMenus: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"]
    },
    {
        menu: "For Government",
        childMenus: ["Shop for Government", "Shop for Veterans and Military"]
    },
    {
        menu: "Apple Values",
        childMenus: ["Accessibility", "Education", "Environment", "Inclusion and Diversity",
            "Privacy", "Racial Equity and Justice", "Supplier Responsibility"]
    },
    {
        menu: "About Apple",
        childMenus: ["Newsroom", "Apple Leadership", "Career Opportunities",
            "Investors", "Ethics & Compliance", "Events", "Contact Apple"]
    }
];

const MainMenu = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.8rem",
    fontWeight: 600
}));

const MyLink = styled("a")(() => ({
    textDecoration: "none",
    userSelect: "none",
    msUserSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    "&:hover": {
        cursor: "pointer",
        textDecoration: "underline"
    }
}));

export default function FooterGrid() {
    const theme = useTheme();
    const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
    const [expanded, setExpanded] = useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const MyAccordion = FOOTER_LINKS.map(fl => (
        <Accordion
            elevation={0}
            key={fl.menu}
            expanded={expanded === fl.menu}
            onChange={handleChange(fl.menu)}
            sx={{ backgroundColor: theme.palette.grey[100] }}
            disableGutters
            square>
            <AccordionSummary
                id={fl.menu}
                expandIcon={<ExpandMoreIcon />}>
                <MainMenu>
                    {fl.menu}
                </MainMenu>
            </AccordionSummary>
            <AccordionDetails>
                {fl.childMenus?.map(cm => (
                    <MyLink
                        key={cm}>
                        <Typography
                            color="text.secondary"
                            sx={{ fontSize: "0.8rem" }}>
                            {cm}
                        </Typography>
                    </MyLink>
                ))}
            </AccordionDetails>
        </Accordion>
    ));

    if (matchesLg) {
        return MyAccordion;
    }

    return (
        <Grid
            container
            direction="column"
            sx={{ maxHeight: "500px" }}
            columnSpacing={6}
            rowSpacing={4}>
            {FOOTER_LINKS.map(fl => (
                <Grid
                    key={fl.menu}
                    item>
                    <Grid
                        container
                        direction="column"
                        rowSpacing={0.4}>
                        <Grid
                            item>
                            <MainMenu>
                                {fl.menu}
                            </MainMenu>
                        </Grid>
                        {fl.childMenus.map(cm => (
                            <Grid
                                key={cm}
                                item>
                                <MyLink>
                                    <Typography
                                        color="text.secondary"
                                        sx={{ fontSize: "0.8rem" }}>
                                        {cm}
                                    </Typography>
                                </MyLink>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
}