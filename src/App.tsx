import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gradient from "./components/Gradient";

export default function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased bg-black">
      <Gradient />
      <div className="fixed inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
      </div>
    </div>
  )
}