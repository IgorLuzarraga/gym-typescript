import { useForm } from "react-hook-form";
import { SelectedPage } from "../../share/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from "../../share/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.ContactUs} className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                <Header />
                <div className="mt-10 justify-between gap-8 md:flex">
                    <Form />
                    <Image />
                </div>
            </motion.div>
        </section>
    )
}

const Header = () =>
    <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        }}
    >
        <HText>
            <span className="text-primary-500">JOIN NOW</span>
            <span> TO GET IN SHAPE</span>
        </HText>
        <p className="my-5">
            Nostrud veniam non sit quis aute irure esse aute magna. Occaecat adipisicing dolore officia ullamco exercitation. Aliqua aute non sit do elit duis in labore non. Sunt consequat excepteur Lorem reprehenderit est commodo exercitation veniam amet enim in. Mollit nisi sunt incididunt excepteur esse Lorem velit eu et ipsum ex. Officia dolor reprehenderit occaecat veniam amet dolore dolore irure ipsum laboris elit labore est.
        </p>
    </motion.div>

const Form = () => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault(); // Prevent the default form submission behavior
        }
    };

    return (
        <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <form
                target="_blank"
                onSubmit={onSubmit}
                // action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                action="https://formsubmit.co/f73d2fb1f3c522779fd05f7c01aa8931"
                method="POST"
            >
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                />
                {errors.name && (
                    <p className="mt-1 text-primary-500">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                    </p>
                )}

                <input
                    className={inputStyles}
                    type="text"
                    placeholder="EMAIL"

                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                    <p className="mt-1 text-primary-500">
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}
                <textarea
                    className={inputStyles}
                    placeholder="MESSAGE"
                    cols={50}
                    rows={4}
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                    })}
                />
                {errors.message && (
                    <p className="mt-1 text-primary-500">
                        {errors.message.type === "required" && "This field is required."}
                        {errors.message.type === "maxLength" && "Max length is 2000 char."}
                    </p>
                )}

                <button
                    type="submit"
                    className="mt-5 rounded-lg bg-secondary-500 px-20
                               py-3 transition duration-1000 hover:text-white"
                >
                    SUBMIT
                </button>

            </form>

        </motion.div>
    )
}

const Image = () =>
    <motion.div
        className="relative mt-16 basis-2/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        }}
    >
        <div className="w-full before:absolute before:-bottom-20
                    before:-right-10 before:z-[-1] md:before:content-evolvetext"
        >
            <img
                className="w-full opacity-70"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
            />
        </div>
    </motion.div>

export default ContactUs