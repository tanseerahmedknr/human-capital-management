import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
      {/* Browser Router is from react dom */}
      <BrowserRouter>
        {/* Nav bar is outside of route since it is default  */}
        <Navbar />

        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>

        {/* Since routes are being used componets are directly injected in routes */}
        {/* <AddEmployee />
          <EmployeeList /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
