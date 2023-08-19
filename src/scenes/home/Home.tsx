import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../share/types";
import { motion } from 'framer-motion'
import ActionButton from "../../share/ActionButton";
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import HomePageText from '../../assets/HomePageText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'

import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="flex flex-col gap-16 bg-gray-20 py-10 md:h-full md:pb-6"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto flex flex-col w-5/6 items-center justify-center md:flex-row md: h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <MainHeader setSelectedPage={setSelectedPage} />
                <Image />

            </motion.div>

            {/* SPONSORS */}
            {isAboveMediumScreens && (<Sponsors />)}
        </section>
    )
}

const MainHeader = ({ setSelectedPage }: Props) =>
    <div className="z-10 mt-32 flex flex-col md:basis-3/5">
        <Headings />
        <Actions setSelectedPage={setSelectedPage} />
    </div>

const Headings = () =>
    <motion.div
        className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
            </div>
        </div>

        <p className="mt-8 text-sm md:text-sm">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
        </p>
    </motion.div>


const Actions = ({ setSelectedPage }: Props) =>
    <motion.div
        className="mt-8 flex flex-row justify-start items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 1.0 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
        </ActionButton>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>


const Image = () =>
    <div
        className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-2 md:justify-end"
    >
        <img alt="home-pageGraphic" src={HomePageGraphic} />
    </div>


const Sponsors = () =>
    <div className="h-[150px] w-full bg-primary-100 flex items-center">
        <div className="mx-auto w-5/6 flex flex-row justify-start">
            <div className="flex w-3/5 items-center justify-between">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
        </div>
    </div>


export default Home;