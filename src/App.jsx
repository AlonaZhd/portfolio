import "./App.scss";
import Hero from "./containers/hero/Hero";
import Menu from "./containers/menu/Menu";

function App() {
    return (
        <div className="App">
            <Menu></Menu>
            <Hero></Hero>
            <main></main>
        </div>
    );
}

export default App;
