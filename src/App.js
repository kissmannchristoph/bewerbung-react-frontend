import "./App.scss";

import {
  BrowserRouter,
  Router,
  Route,
  Link,
  useHistory,
  Switch,
} from "react-router-dom";
import Welcome from "./components/welcome";
import Anschreiben from "./components/anschreiben";
import Lebenslauf from "./components/lebenslauf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/anschreiben">
          <Anschreiben />
        </Route>
        <Route path="/lebenslauf">
          <Lebenslauf />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
