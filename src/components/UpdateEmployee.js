import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  // Using id as parameter
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  const updateEmployee = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   Handle change is same as that of add employee
  const handleChange = (e) => {
    const value = e.target.value;
    // [... is destructing the array of employees to default value], then taking the name and value from the input fields.
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex mx-auto max-w-2xl shadow border-b bg-gray-100">
      <div className="px-8 py-8">
        {/* if need space between characters then use {tracking-wider} in styling */}
        <div className="font-thin text-2xl px-48">
          <h1>UpdateEmployee</h1>
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
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-600 mt-2
          h-10 w-24 "
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-600 mt-2 h-10 w-24 "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
