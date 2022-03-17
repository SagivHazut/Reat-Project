import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/LoginPage/SignupPage";
import CardInfoPage from "./pages/CardInfoPage";
import Footer from "./pages/Footer/FooterComponent";
function App() {
  return (
    <div>
      <NavBarComponent></NavBarComponent>
      <Switch>
        {/* http://localhost:3000/ */}
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {/* http://localhost:3000/home */}
        {/* <Route path="/home">
          <HomePage />
        </Route> */}
        <Route path="/home" component={HomePage} />
        {/* http://localhost:3000/login */}
        {/* <Route path="/login">
          <LoginPage />
        </Route> */}
        <Route path="/login" component={LoginPage} />
        {/* http://localhost:3000/signup */}
        <Route path="/signup" component={SignupPage} />
        {/* http://localhost:3000/cardspanel */}
        {/* <Route path="/cardspanel">
          <CardsPanelPage />
        </Route> */}
        <AuthGuardRoute path="/cardspanel" component={CardsPanelPage} />
        <AuthGuardRoute path="/card/:id" component={CardInfoPage} />
        {/* <Route path="*">
          <NotFoundPage />
        </Route> */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
