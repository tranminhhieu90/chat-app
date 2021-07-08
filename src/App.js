import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AddRoomModal from "./Modals/AddRoomModal";
import InviteMemberModal from "./Modals/InviteMemberModal";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
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
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
