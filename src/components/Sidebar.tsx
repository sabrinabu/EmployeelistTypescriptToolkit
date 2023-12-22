import React, { useEffect, useState } from "react";
import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../redux/employee";
import { RootState } from "../redux/store";
import { addClickNum } from "../redux/numberclickslice";

export default function Sidebar() {
  const [dataa, setDataa] = useState(data);

  const handleClick = (id: number) => {
    dispatch(addClickNum(id));
  };

  const dispatch = useDispatch();
  const employee = useSelector((state: RootState) => state.employee.employees);
  const number = useSelector((state: RootState) => state.numberclick.number);
  console.log(employee.length);

  const handleData = () => {
    let arr = dataa.map((d) => dispatch(addEmployee(d)));
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <div className=" flex">
      <div className="flex flex-col mt-10 ms-16">
        <h1 className="text-lg text-center">Employee List</h1>
        {employee.map((d, i) => (
          <span key={d.id} onClick={() => handleClick(i)} className="text-2xl">
            <div className="border-2 border-indigo-200 text-center h-12 w-64">
              {d.firstName}
            </div>
          </span>
        ))}
      </div>
      <div className="flex flex-col mt-40 ms-48  w-60 h-60">
        <h1  className="text-lg">Employee Description</h1>
        <span className="w-24 h-16 gap-4">
          {" "}
          <img src={employee[number]?.imageUrl} />
        </span>
        <span className="text-lg text-center"> {employee[number]?.firstName}</span>
      </div>
    </div>
  );
}
