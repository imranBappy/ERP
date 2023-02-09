import Nav from "../components/Nav"
import Bodypart from "../components/Bodypart";
import Footer from "../components/Footer";

const Home = () => {

    return <>
        <header >
            <Nav />
        </header>
        <main>
            <Bodypart />
        </main>

        <footer>
            <Footer />
        </footer>

    </>
}
export default Home;