import MyCard from "./MyCard";
import MacbookAir from "../assets/images/macboook_air.jpg";
import MacbookAirMd from "../assets/images/macbook_air_medium.jpg";
import MacbookAirSm from "../assets/images/macbook_air_small.jpg";
import iphone14Pro from "../assets/images/iphone14_pro.jpg";
import iphone14ProMd from "../assets/images/iphone14_pro_medium.jpg";
import iphone14ProSm from "../assets/images/iphone14_pro_small.jpg";
import iphone14 from "../assets/images/iphone14.jpg";
import iphone14Md from "../assets/images/iphone14_medium.jpg";
import iphone14Sm from "../assets/images/iphone14_small.jpg";

export default function MyCardList() {
    return (
        <>
            <MyCard
                bgImageLg={MacbookAir}
                bgImageMd={MacbookAirMd}
                bgImageSm={MacbookAirSm}
                color="black"
                title='Macbook Air 15"'
                subtitle="Impressively big. Impressively thin." />
            <MyCard
                bgImageLg={iphone14Pro}
                bgImageMd={iphone14ProMd}
                bgImageSm={iphone14ProSm}
                color="white"
                title="iPhone 14 Pro"
                subtitle="Pro. Beyond." />
            <MyCard
                bgImageLg={iphone14}
                bgImageMd={iphone14Md}
                bgImageSm={iphone14Sm}
                color="black"
                title="iPhone 14"
                subtitle="Wonderfull." />
        </>
    );
}