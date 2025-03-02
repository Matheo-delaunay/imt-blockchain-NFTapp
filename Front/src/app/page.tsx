import Navigation from "@/components/Navigation";
import Description from "@/components/Description";
import Feature from "@/components/Feature";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <main>
                <Description/>
                <Feature/>
                <CTA/>
            </main>
            <Footer/>
        </>
    )
}
