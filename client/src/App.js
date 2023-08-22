import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Create from "./pages/Create"
import Detail from './pages/Detail';
import Page404 from "./pages/Page404"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/pokedex" component={Home}/>
        <Route path="/create" component={Create}/>
        <Route path="/pokedex/:id" component={Detail}/>
        <Route path="/*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;