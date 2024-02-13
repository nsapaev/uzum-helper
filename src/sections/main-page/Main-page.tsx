
import HomeSection from "../home-section/Home-section.tsx";
import AboutUsSection from "../about-us-section/About-us-section.tsx";
import WhyWeSection from "../why-we/Why-we.tsx";
import Rates from "../rates/Rates.tsx";
import FAQ from "../faq/FAQ.tsx";

export default function MainPage() {
    return (
    <>
        <HomeSection/>
        <AboutUsSection/>
        <WhyWeSection/>
        <Rates/>
        <FAQ/>
    </>
    )
}
