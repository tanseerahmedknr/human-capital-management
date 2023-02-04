import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm space-x-3">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          // Getting id to delete the user
          // WE CANNOT DEFINE DELETEEMPLOYYE WITH THE SAME COMPONENT RATHER IT IS PASSED TO PARENT COMPONENT WHICH IS
          // EMPLOYEE LIST [IT IS A CONCEPT PASSING THE DATA FROM CHILD TO PARENT]
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
