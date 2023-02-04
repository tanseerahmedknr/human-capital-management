import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  // To check if data is loaded or not
  const [loading, setLoading] = useState(true);

  // To save list of employees
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // await is for waiting untill you get get data back
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Passing this method as props to each and every employee in the below employee state
  const deleteEmployee = (e, id) => {
    e.preventDefault();
    // deleteEmployee is call to backend service
    EmployeeService.deleteEmployee(id).then((res) => {
      // employees is to check if data is present, it is an array from useState above
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        })
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              {/* tracking wider : space between letters */}
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {/* looping should only be done after loading */}
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                // Passing employee object as props to Employee component
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                ></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
