import Login from "./Login";
import "../App.css";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage('id');
  return(
    <div className='flex h-screen w-screen items-center justify-center flex-col bg-gray-100' >
      <Login onIdSubmit={setId}/>
    </div>
  );
}

export default App;
