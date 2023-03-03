import "./App.css";
import Tasks from "./pages/tasks";
import Theme from "./styles/theme";
// import { onAuthStateChanged } from "firebase/auth"
// import { useEffect, useState } from "react";
// import { auth } from "./firebase";


function App() {
  // const [authuser, setauthuser] = useState(null);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if(user){
  //       setauthuser(user);
  //     }else {
  //       setauthuser(null)
  //     }
  //   });
  //   return () => {
  //     listen();
  //   }
  // }, []);
  return (
      <div>
        {/* {authuser ? <><p>{`Singned in as ${authuser.email}`}</p><button>Log out</button></> : <p>Signed out</p>} */}
        <Theme>
          <Tasks />
        </Theme>

      </div>

   
  );
}

export default App;
