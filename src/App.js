import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./components/Context/AuthProvider";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AppProvider from "./components/Context/AppProvider";
import AddRoomModal from "./Modal/AddRoomModal";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={ChatRoom} />
          </Switch>
          <AddRoomModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
