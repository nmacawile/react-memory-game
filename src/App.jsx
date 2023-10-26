import "./App.css";
import Header from "./components/Header.jsx";
import Cards from "./components/Cards.jsx";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./features/score/scoreSlice";
import { push, clear } from "./features/picks/picksSlice";

export function App() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.value);
  const picks = useSelector((state) => state.picks.value);

  const testPick = (n) => {
    const alreadyPicked = picks.some((p) => p === n);
    if (alreadyPicked) {
      dispatch(reset());
      dispatch(clear());
    } else {
      dispatch(increment());
      dispatch(push(n));
    }
  };

  return (
    <div className="bg-neutral-800">
      <Header />
      <main className="max-w-6xl w-full m-auto">
        <Cards testPick={testPick}></Cards>
      </main>
    </div>
  );
}

export default App;
