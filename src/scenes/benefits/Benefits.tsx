import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from "../../share/types"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import { motion } from "framer-motion"
import HText from "../../share/HText"
import Benefit from "./Benefit"
import ActionButton from "../../share/ActionButton"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae adipisci dolores maxime repellendus explicabo. Repudiandae labore nam ipsam nulla nobis enim explicabo vero mollitia iure, accusantium quod laborum debitis quos."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia praesentium explicabo vel saepe accusamus error ex minus. Illum exercitationem vitae omnis unde distinctio, laudantium in. Harum tempora asperiores maiores!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium esse tenetur odio doloribus dolorem molestiae aliquid quasi, corrupti, at voluptatem officia quis ipsam ut magnam placeat sunt? Perspiciatis, commodi similique."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.3 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <BenefitsHeader />
                <ShowBenefits setSelectedPage={setSelectedPage} />

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between 
            gap-20 md:mt-28 md:flex"
                >
                    <Graphic />

                    {/* DESCRIPTION */}
                    <div>
                        <BenefitsTitle />
                        <BenefitsDescription />
                        <Button setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

const BenefitsHeader = () =>
    <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <HText>MORE THAN JUST GYM.</HText>
        <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
        </p>
    </motion.div>

const ShowBenefits = ({ setSelectedPage }: Props) =>
    <motion.div
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={container}
    >
        {showBenefits({ setSelectedPage })}
    </motion.div>

const showBenefits = ({ setSelectedPage }: Props) =>
    benefits.map((benefit: BenefitType) =>
        <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
        />
    )

// const BenefitsTitle = () =>
//     <div className="relative">
//         <div className="before:absolute before:-top-20 before:-left-20
//       before:z-[1] before:content-abstractwaves">
//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.7 }}
//                 variants={{
//                     hidden: { opacity: 0, x: 100 },
//                     visible: { opacity: 1, x: 0 }
//                 }}
//             >
//                 <HText>
//                     MILLIONS OF HAPPY MEMBERS GETTING{" "}
//                     <span className="text-primary-500">FIT</span>
//                 </HText>
//             </motion.div>
//         </div>
//     </div>



const BenefitsTitle = () =>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20
      before:z-[1] before:content-abstractwaves">
                <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                </HText>
            </div>
        </div>
    </motion.div>



const BenefitsDescription = () =>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: 50, y: 100 },
            visible: { opacity: 1, x: 0, y: 0 }
        }}
    >
        <p className="my-5">
            Voluptate eu dolore et minim reprehenderit occaecat mollit enim pariatur aliqua do adipisicing.
        </p>
        <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis quis laudantium iure, iusto, soluta est numquam incidunt in excepturi fugiat neque saepe at cupiditate fugit beatae reprehenderit magnam quas?</p>
    </motion.div>

const Graphic = () =>
    <img
        className="mx-auto"
        src={BenefitsPageGraphic}
        alt="benefits-page-graphic"
    />

const Button = ({ setSelectedPage }: Props) =>
    <div className="relative mt-16">
        <div className="before:absolute before:-bottom-20 before:right-28
      before:z-[-1] before:content-sparkles">
            <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
        </div>
    </div>


export default Benefits
