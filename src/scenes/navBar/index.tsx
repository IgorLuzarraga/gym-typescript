import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}


const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 grop-shadow"

    return (
        <div className={`${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className="mx-auto w-5/6">
                {isAboveMediumScreens
                    ? <NavAvobeMediumScreen
                        selectedPage={selectedPage}
                        setSelectedPAge={setSelectedPage}
                    />
                    : <NavAvobeMediumScreen
                        selectedPage={selectedPage}
                        setSelectedPAge={setSelectedPage}
                    />
                }
            </div>
        </div>
    )
}

export default NavBar