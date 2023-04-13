import Table from "./components/Table";
import EditForm from "./components/EditForm";
import AddForm from "./components/AddForm";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/edit-form/:id" element={<EditForm />}></Route>
          <Route path="/add-form/" element={<AddForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
