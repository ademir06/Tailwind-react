import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import HappySays from "./components/happySays/happySays";
import Footer from "./components/footer/Footer";
import WhyChoose from "./components/whychoose/Whychoose";
import Dishes from "./components/dishes/Dishes";
import AboutUs from "./components/aboutus/AboutUs";

function App() {
    return (
        <div>
            <Header/>
            <Home/>
            <WhyChoose/>
            <AboutUs/>
            <Dishes/>
            <HappySays/>
            <Footer/>
        </div>
    );
}

export default App;
