import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductViewer from "./Components/ProductViewer"
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"
import ShowCase from "./Components/ShowCase"
import Performance from "./Components/Performance"
import Features from "./Components/Features"
import Highlights from "./Components/Highlights"
import Footer from "./Components/Footer"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
      <Performance />
      <Features/>
      <Highlights/>
      <Footer/>
    </main>
  )
}

export default App