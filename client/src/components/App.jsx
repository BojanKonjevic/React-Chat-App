import Login from "./Login";
import "../App.css";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../Contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard=(
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )
  if(id){
    return(
      <div className="bg-zinc-900">
        {dashboard}
      </div>
    )
  }
  return(
    <div>
       <Login onIdSubmit={setId}/>
    </div>
  )
}

export default App;
