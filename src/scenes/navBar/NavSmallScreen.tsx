import { SelectedPage } from '../../share/types'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const NavSmallScreen = ({ selectedPage, setSelectedPage }: Props) => {
    return (
        <div>NavSmallScreen</div>
    )
}

export default NavSmallScreen