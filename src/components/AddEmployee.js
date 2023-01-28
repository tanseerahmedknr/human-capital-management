import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  // We are deconstructing , defining default initial value in useState [entire object]
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    // [... is destructing the array of employees to default value], then taking the name and value from the input fields.
    setEmployee({ ...employee, [e.target.name]: value });
  };

  // Function taking as input parameter
  const saveEmployee = (e) => {
    // Stopping page to refresh
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // border-b is border at bottom
  return (
    <div className="flex mx-auto max-w-2xl shadow border-b bg-gray-100">
      <div className="px-8 py-8">
        {/* if need space between characters then use {tracking-wider} in styling */}
        <div className="font-thin text-2xl px-48">
          <h1>Add New Employee</h1>
        </div>
        {/* form details, width-full*/}
        <div className=" items-center justify-center h-14 my-4 w-full">
          {/* block prevents anything besides it */}
          <label className="block text-gray-600 text-lg font-normal">
            First Name
          </label>
          {/* Need to have a tag name and value for state management */}
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            // on change of input filed calling a method handleChange which will update state
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-1 px-2 py-2 rounded-md "
          ></input>
        </div>
        <div className=" items-center justify-center h-14 my-4 w-full">
          {/* block prevents anything besides it */}
          <label className="block text-gray-600 text-lg font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-1 px-2 py-2 rounded-md "
          ></input>
        </div>
        <div className=" items-center justify-center h-14 my-4 w-full">
          {/* block prevents anything besides it */}
          <label className="block text-gray-600 text-lg font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-1 px-2 py-2 rounded-md "
          ></input>
        </div>

        <div className=" items-center justify-center h-14 my-5 w-full space-x-4 pt-2">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-600 mt-2
          h-10 w-24 "
          >
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-600 mt-2 h-10 w-24 ">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
