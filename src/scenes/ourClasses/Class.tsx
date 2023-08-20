import { ClassType } from "../../share/types";

const Class = ({ name, description, image }: ClassType) => {
    const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[480px]
    flex-col items-center justify-center whitespace-normal
    bg-primary-500 text-center text-white opacity-0
    transition duration-500 hover:opacity-80`

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[480px]">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    )
}

export default Class