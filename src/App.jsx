import Home from "./components/Home";
import { Preloader } from "./components/Preloader";

function App() {
  return (
    <>
      <main>
        <Preloader />
        <Home />
      </main>
    </>
  );
}

export default App;
