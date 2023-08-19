import { useEffect, useState } from "react";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";
import Footer from "./scenes/footer/Footer";
import { SelectedPage } from "./share/types";
import OurClasses from "./scenes/ourClasses/OurClasses";
import ContactUs from "./scenes/contactUs/ContactUs";
import NavBar from "./scenes/navBar";

function App() {
  const [selectedPage, setSelectedPage] =
    useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      <OurClasses
        setSelectedPage={setSelectedPage}
      />
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
      <Footer />
    </div>
  )
}

export default App
