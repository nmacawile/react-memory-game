import "./App.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import Modal from "./components/Modal.jsx";

export function App() {
  return (
    <div className="bg-neutral-800">
      <Header />
      <Modal />
      <main className="max-w-6xl w-full m-auto">
        <Cards />
      </main>
    </div>
  );
}

export default App;
