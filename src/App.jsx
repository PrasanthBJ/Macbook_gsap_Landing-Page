import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ProductViewer from "./Components/ProductViewer"
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App