import Login from "./Login";
import "../App.css";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../Contexts/ContactsProvider";
import { ConversationsProvider } from "../Contexts/ConversationsProvider";

function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard=(
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id}/>
      </ConversationsProvider>
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
