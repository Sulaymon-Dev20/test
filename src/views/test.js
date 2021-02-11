import "react-multi-carousel/lib/styles.css";
import "../components/Other/style.css";
import UAParser from "ua-parser-js";
import React, {Fragment} from "react";
import WithScrollbar from "../components/Other/WithScrollbar";
import Section from "../components/Other/Section";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Index = () => {
    return (
        <>
            <Fragment>
                <Section>
                    <WithScrollbar/>
                </Section>
            </Fragment>
        </>
    );
};
export default Index;
