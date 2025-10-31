import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductViewer from "./Components/ProductViewer"
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"
import ShowCase from "./Components/ShowCase"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
    </main>
  )
}

export default App