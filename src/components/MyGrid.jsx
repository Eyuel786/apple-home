import { Grid } from "@mui/material";

import image04 from "../assets/images/04.jpg";
import appleWatch from "../assets/images/apple_watch.jpg";
import appleWatchMd from "../assets/images/apple_watch_medium.jpg";
import appleWatchSm from "../assets/images/apple_watch_small.jpg";
import appleVision from "../assets/images/apple_vision.jpg";
import appleVisionMd from "../assets/images/apple_vision_medium.jpg";
import appleVisionSm from "../assets/images/apple_vision_small.jpg";
import iphoneTradeIn from "../assets/images/iphone_tradein.jpg";
import iphoneTradeInMd from "../assets/images/iphone_tradein_medium.jpg";
import iphoneTradeInSm from "../assets/images/iphone_tradein_small.jpg";
import appleNews from "../assets/images/apple_news.jpg";
import appleNewsMd from "../assets/images/apple_news_medium.jpg";
import appleNewsSm from "../assets/images/apple_news_small.jpg";
import appleCard from "../assets/images/apple_card.jpg";
import appleCardMd from "../assets/images/apple_card_medium.jpg";
import appleCardSm from "../assets/images/apple_card_small.jpg";
import MyGridCard from "./MyGridCard";


const GRID_ELEMENTS = [
    {
        title: "Save on Mac or iPad for college",
        subtitle: "Plus get a gift card up to $150.",
        bgImageLg: image04,
        bgImageMd: image04,
        bgImageSm: image04,
        links: ["Shop now"]
    },
    {
        title: "Watch series 8",
        subtitle: "A healthy leap ahead.",
        color: "white",
        bgImageLg: appleWatch,
        bgImageMd: appleWatchMd,
        bgImageSm: appleWatchSm,
        links: ["Learn more", "Buy"],
        appleIcon: true
    },
    {
        title: "Vision Pro",
        subtitle: "Welcome to the era of spatial computing",
        bgImageLg: appleVision,
        bgImageMd: appleVisionMd,
        bgImageSm: appleVisionSm,
        top: "70%",
        links: ["Learn more"],
        appleIcon: true
    },
    {
        title: "Trade In",
        subtitle: "Upgrade and save. It's that easy",
        bgImageLg: iphoneTradeIn,
        bgImageMd: iphoneTradeInMd,
        bgImageSm: iphoneTradeInSm,
        links: ["See what your device is worth"],
        appleIcon: true
    },
    {
        title: "News",
        subtitle: "64 matches. 32 teams. One place to follow every goal",
        bgImageLg: appleNews,
        bgImageMd: appleNewsMd,
        bgImageSm: appleNewsSm,
        links: ["Follow the women's tournament"],
        appleIcon: true
    },
    {
        title: "Card",
        subtitle: "Get up to 3% Daily Cash back with every purchase.",
        bgImageLg: appleCard,
        bgImageMd: appleCardMd,
        bgImageSm: appleCardSm,
        links: ["Learn more", "Apply now"],
        appleIcon: true
    }
];


export default function MyGrid() {
    return (
        <Grid
            container
            spacing={1}>
            {GRID_ELEMENTS.map(el => (
                <Grid
                    item
                    key={el.title}
                    lg={6}
                    md={6}
                    xs={12}>
                    <MyGridCard {...el} />
                </Grid>
            ))}
        </Grid>
    );
}