import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const MyText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "12px",
    marginBottom: "0.5rem"
}));

export default function FooterTexts() {
    return (
        <>
            <MyText>
                2. Qualified Purchasers receive an Apple Gift Card when they
                purchase an eligible Mac or iPad at a Qualifying Location. Only
                one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser.
                Offer subject to availability. While supplies last. View full
                terms and conditions of offer here.
            </MyText>
            <MyText>
                Apple Vision Pro has not been authorized as required by the rules
                of the Federal Communications Commission. This device is not, and
                may not be, offered for sale or lease, or sold or leased, until
                authorization is obtained.
            </MyText>
            <MyText>
                Apple Vision Pro will be available early next year on <u>apple.com</u> and
                at Apple retail stores in the U.S.
            </MyText>
            <MyText>
                To access and use all the features of Apple Card, you must add Apple
                Card to Wallet on an iPhone or iPad with the latest version of iOS or
                iPadOS. Update to the latest version by going to Settings &gt; General &gt;
                Software Update. Tap Download and Install.
            </MyText>
            <MyText>
                Available for qualifying applicants in the United States.
            </MyText>
            <MyText>
                Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
            </MyText>
            <MyText>
                Learn more about how Apple Card applications are evaluated at <u>support.apple.com/kb/HT209218.</u>
            </MyText>
            <MyText>
                A subscription is required for Apple TV+.
            </MyText>
            <MyText
                sx={{ mb: 3 }}>
                Major League Baseball trademarks and copyrights are used with
                permission of MLB Advanced Media, L.P. All rights reserved.
            </MyText>
        </>
    );
}