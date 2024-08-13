import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { About } from "./pages/About/About.jsx";
import { NotFound } from "./pages/_404.jsx";
import "./style.css";
import { Service } from "./pages/Service/index.jsx";
import Footer from "./components/footer.jsx";
import { Contact } from "./pages/contact us/contact.jsx";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Service" component={Service} />
          <Route path="/Contact" component={Contact} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
