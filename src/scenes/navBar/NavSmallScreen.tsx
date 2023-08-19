import { useState } from 'react'
import { SelectedPage } from '../../share/types'
import Logo from '../../assets/Logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Link from './Link'

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

type Btn3BarsProps = {
    isMenuToggled: boolean,
    setIsMenuToggled: (value: boolean) => void
}

type ModalMenuProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
    isMenuToggled: boolean
    setIsMenuToggled: (value: boolean) => void
}

const NavSmallScreen = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

    return (
        <nav>
            <div className='w-full flex items-center justify-between'>
                <img src={Logo} alt='logo' />

                <Btn3Bars
                    isMenuToggled={isMenuToggled}
                    setIsMenuToggled={setIsMenuToggled}
                />

                {/* MODAL MENU */}
                {isMenuToggled && (<ModalMenu
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isMenuToggled={isMenuToggled}
                    setIsMenuToggled={setIsMenuToggled}
                />
                )}
            </div>
        </nav>
    )
}

const Btn3Bars = ({ isMenuToggled, setIsMenuToggled }: Btn3BarsProps) =>
    <button
        className='rounded-full bg-secondary-500 p-2'
        onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
        <Bars3Icon className='w-6 h-6 text-white' />
    </button>

const ModalMenu = ({ selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled }: ModalMenuProps) =>
    <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
        {/* CLOSE ICON */}
        <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
        </div>

        {/* MENU ITEMS */}
        <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
                // page Home
                page={SelectedPage.Home}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                // page Benefits
                page={SelectedPage.Benefits}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                // page Our Classes
                page={SelectedPage.OurClasses}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                // page Contact Us
                page={SelectedPage.ContactUs}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    </div>

export default NavSmallScreen