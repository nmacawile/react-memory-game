import "./App.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";

export function App() {
  return (
    <div className="bg-neutral-800">
      <Header />
      <main className="max-w-6xl w-full m-auto">
        <Cards />
      </main>
    </div>
  );
}

export default App;
