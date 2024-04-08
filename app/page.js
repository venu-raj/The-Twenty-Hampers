
import Landing from "./_components/Landing"
import Exploree from './_components/Explore'
import Navbar from './_components/Navbar'
import Featured from './_components/Featured'
import Expediency from './_components/Expediency'
import Footer from './_components/Footer'
import Contact from "./_components/Contact"

export default function Home() {
  return (
    <main className="relative mx-auto max-w-7xl">
      <Navbar/>
      <Landing/>
      <Exploree/>
      {/* <Featured/> */}
      <Expediency/>
      <Contact/>
      <Footer/>
    </main>
  );
}
