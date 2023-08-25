import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}


const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 shadow-2xl"

    return (
        <div className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className="mx-auto w-5/6">
                {isAboveMediumScreens
                    ? <NavAvobeMediumScreen
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    : <NavSmallScreen
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                }
            </div>
        </div>
    )
}

export default NavBar