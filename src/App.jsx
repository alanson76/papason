import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
// import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
// import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import TermsOfUse from "./Components/TermsOfUse/TermsOfUse";

const App = () => {
    // const [playState, setPlayState] = useState(false);
    const [termsOfUseState, setTermsOfUseState] = useState(false);

    useEffect(() => {
        return () => {
            console.log(termsOfUseState);
        };
    }, [termsOfUseState]);

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="Our Services" title="What we serve" />
                <Services />
                {/* <About setPlayState={setPlayState} /> */}
                <Title subTitle="Gallery" title="Our Photos" />
                <Gallery />
                {/* <Title subTitle="Testimonials" title="What our customer says" /> */}
                {/* <Testimonials /> */}
                <Title subTitle="Contact Us" title="Free Estimate" />
                <Contact />
                <Footer setTermsOfUseState={setTermsOfUseState} />
            </div>
            {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
            {termsOfUseState && (
                <TermsOfUse
                    termsOfUseState={termsOfUseState}
                    setTermsOfUseState={setTermsOfUseState}
                />
            )}
        </div>
    );
};

export default App;
