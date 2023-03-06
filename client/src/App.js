import { BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create"
import Detail from './pages/Detail/Detail';
import Page404 from "./pages/Page404/Page404"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/pokedex" component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/pokedex/:id" component={Detail}/>
          <Route path="/*" component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;