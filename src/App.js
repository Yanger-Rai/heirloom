import "./App.css";
import NavBar from "./components/nav/NavigationBar";
import Logo from "./components/Logo/Logo";
import Hero from "./components/Hero/Hero";
import Cushion from "./components/Cushion/Cushion";

function App() {
  return (
    <>
      <div className="App">
        <Logo />
        <NavBar />
        <Hero />
        <Cushion />
      </div>
    </>
  );
}

export default App;
