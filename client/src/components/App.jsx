import Login from "./Login";
import "../App.css";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id');
  return(
    <div>
      <Login onIdSubmit={setId}/>
    </div>
  );
}

export default App;
