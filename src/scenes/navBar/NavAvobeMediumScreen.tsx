import Logo from '../../assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '../../share/types'
import ActionButton from '../../share/ActionButton'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

type MenuProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavAvobeMediumScreen = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between"

    return (
        <nav>
            <div className={`${flexBetween} w-full gap-12`}>
                <img src={Logo} alt='logo' />

                <Menu
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
        </nav>
    )
}

const Menu = ({ selectedPage, setSelectedPage }: MenuProps) => {
    const flexBetween = "flex items-center justify-between"

    return (
        <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-2 text-sm`}>
                <Link
                    //page="Home"
                    page={SelectedPage.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    //page="Benefits"
                    page={SelectedPage.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    //page="Our Classes"
                    page={SelectedPage.OurClasses}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
                <Link
                    //page="Contact Us"
                    page={SelectedPage.ContactUs}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </div>
            <div className={`${flexBetween} gap-3`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
        </div>
    )
}

export default NavAvobeMediumScreen