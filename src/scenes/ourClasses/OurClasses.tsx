import { SelectedPage, ClassType } from "../../share/types";
import image1 from "@/assets/image1.png"
import image2 from '../../assets/image2.png'
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from "../../share/HText";
import Class from "./Class";
import { motion } from "framer-motion";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Culpa reprehenderit eu ullamco cupidatat voluptate. In esse cupidatat ea ex laboris esse magna magna nulla. Voluptate mollit sunt laboris magna cupidatat ipsum anim sunt elit.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description:
            "Omnis iste doloremque mollitia numquam alias hic, amet quis in corporis, veniam cum quod ad iusto minus pariatur. Culpa voluptate non tenetur!",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description:
            "Animi reiciendis maiores culpa in modi corrupti aut doloribus dolorem nisi distinctio eos inventore tenetur fuga, temporibus voluptates aspernatur, cumque consequuntur nam!",
        image: image3,

    },
    {
        name: "Adventure Classes",
        description:
            "Vitae, expedita impedit, tenetur amet modi natus repellat blanditiis vero ad alias reprehenderit molestiae illum! Omnis impedit dolor obcaecati totam necessitatibus neque?",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description:
            "Eaque dolor pariatur, ipsa nulla ipsam architecto, voluptatem aliquid recusandae molestiae, est tenetur accusamus dolorem totam fugit rem laboriosam magni inventore qui?",
        image: image5,
    },
    {
        name: "Training Classes",
        description:
            "Eligendi, accusamus error. Eos provident ipsum illum deleniti ab numquam, quam pariatur quae, culpa dicta molestias consequatur aspernatur impedit quidem doloremque? Earum.",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <ClassesDescription />
                <ShowClasses />
            </motion.div>
        </section>
    )
}

const ClassesDescription = () =>
    <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fuga asperiores veritatis sunt alias animi debitis quisquam facilis odio voluptate voluptas illum tempora repudiandae ea tenetur, doloribus quas ad hic.
                Quis id ad mollit tempor dolore est pariatur sunt excepteur ipsum aute fugiat. Cillum sint consectetur id magna. Deserunt adipisicing ad magna ex voluptate ipsum aute aute fugiat duis eu. Aliqua culpa aliqua consectetur quis excepteur deserunt consequat. Labore consequat laborum commodo consequat officia nisi duis excepteur ad labore id proident. Occaecat commodo tempor aliqua ipsum et commodo.
            </p>
        </div>
    </motion.div>

const ShowClasses = () =>
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
                <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item?.description}
                    image={item.image}
                />
            ))}
        </ul>
    </div>

export default OurClasses
