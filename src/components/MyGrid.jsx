import { Grid } from "@mui/material";

import MyCard from "./MyCard";
import image04 from "../assets/images/04.jpg";
import image05 from "../assets/images/05.jpg";
import image06 from "../assets/images/06.jpg";
import image07 from "../assets/images/07.jpg";
import image08 from "../assets/images/08.jpg";
import image09 from "../assets/images/09.jpg";
import MyGridCard from "./MyGridCard";



export default function MyGrid() {
    return (
        <Grid
            container
            spacing={1}>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    title="Save on Mac or iPad for college"
                    subtitle="Plus get a gift card up to $150."
                    links={["Shop now"]}
                    bgImage={image04} />
            </Grid>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    title="Watch series 8"
                    subtitle="A healthy leap ahead."
                    color="white"
                    bgImage={image05}
                    links={["Learn more", "Buy"]}
                    appleIcon />
            </Grid>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    title="Vision Pro"
                    subtitle="Welcome to the era of spatial computing"
                    bgImage={image06}
                    top="70%"
                    links={["Learn more"]}
                    appleIcon />
            </Grid>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    bgImage={image07}
                    title="Trade In"
                    subtitle="Upgrade and save. It's that easy"
                    links={["See what your device is worth"]}
                    appleIcon />
            </Grid>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    bgImage={image08}
                    title="News"
                    subtitle="64 matches. 32 teams. One place to follow every goal"
                    links={["Follow the women's tournament"]}
                    appleIcon />
            </Grid>
            <Grid
                item
                lg={6}>
                <MyGridCard
                    bgImage={image09}
                    title="Card"
                    subtitle="Get up to 3% Daily Cash back with every purchase."
                    links={["Learn more", "Apply now"]}
                    appleIcon />
            </Grid>
        </Grid>
    );
}