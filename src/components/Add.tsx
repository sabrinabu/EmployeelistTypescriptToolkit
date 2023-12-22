import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useDispatch } from "react-redux";
import { Employee, addNewEmployee } from "../redux/employee";

export default function Add() {
  const startDate = new Date();

  const [addform, setAddform] = useState<boolean>(false);

  const [addFormData, setAddFormData] = useState<Employee>({
    id: "",
    imageUrl: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    age: "",
    dob: "",
    salary: "",
    address: "",
  });
  const dispatch = useDispatch();
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    let newContact: Employee = {
      id: addFormData.id,
      imageUrl: addFormData.imageUrl,
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      contactNumber: addFormData.contactNumber,
      age: addFormData.age,
      dob: addFormData.dob,
      salary: addFormData.salary,
      address: addFormData.address,
    };

    dispatch(addNewEmployee(newContact));
  };

  return (
    <form
      className="flex  flex-col justify-center items-center z-10 shadow-xl border h-auto"
      onSubmit={handleAddFormSubmit}
    >
      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">id</label>
        <input
          type="number"
          name="id"
          placeholder="Enter a id..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">imageUrl</label>
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter a imageUrl..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>
      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">firstName</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">LastName</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your lastName..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>
      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>
      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">dob</label>
        <DatePicker
          selected={startDate}
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">contactNumber</label>
        <input
          type="number"
          name="contactNumber"
          placeholder="Enter your contactNumber..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">salary</label>
        <input
          type="number"
          name="salary"
          placeholder="Enter your salary..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className=" text-gray-900 text-xl">address</label>
        <input
          type="number"
          name="address"
          placeholder="Enter your address..."
          onChange={handleAddFormChange}
          className="w-80 h-12 border-none bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg "
        />
      </div>
      <button className="  bg-gray-400 w-24 h-10">save</button>
    </form>
  );
}
