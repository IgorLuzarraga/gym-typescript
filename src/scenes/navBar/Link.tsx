import { SelectedPage } from "../../share/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const fromSelectedPageToPageName = (selectedPage: SelectedPage) => {
    switch (selectedPage) {
        case SelectedPage.Benefits:
            return 'Benefits'
        case SelectedPage.ContactUs:
            return 'Contact Us'
        case SelectedPage.Home:
            return 'Home'
        case SelectedPage.OurClasses:
            return 'Our Classes'

    }
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) =>
    <AnchorLink
        className={`${selectedPage === page ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
        `}
        href={`#${page}`}
        onClick={() => setSelectedPage(page)}
    >
        {fromSelectedPageToPageName(page)}
    </AnchorLink>


export default Link