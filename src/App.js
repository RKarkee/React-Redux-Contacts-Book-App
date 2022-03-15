import Contacts from "./Components/Contact/Contacts";
import Navbar from "./Components/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContact from "./Components/Contact/AddContact";
import EditContact from "./Components/Contact/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="contacts/add" element={<AddContact />} />
                <Route path="contacts/edit/:id" element={<EditContact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
