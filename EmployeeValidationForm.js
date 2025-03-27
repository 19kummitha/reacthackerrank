import React, { useEffect, useState } from "react";

function EmployeeValidationForm() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [empid,setEmpid]=useState("");
  const [joindate,setDate]=useState("");
  const [validInputs,setValidInputs]=useState(false);
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex=/^[A-Za-z\s]+$/;
  const empIdRegex=/^[0-9]{6}$/
  const isNameValid=(name)=>name.length>=4&&nameRegex.test(name);
  const isEmailValid=(email)=>emailRegex.test(email);
  const isEmpIdValid=(empid)=>empIdRegex.test(empid);
  const isJoiningDateValid=(joindate)=>new Date(joindate) < new Date();
  useEffect(()=>{
    setValidInputs(
      isNameValid(name)&&isEmailValid(email)&&isEmpIdValid(empid)&&isJoiningDateValid(joindate)
    );

  },[name,email,empid,joindate]);
  const handleSubmit=()=>{
    setName('');
    setEmail('');
    setEmpid('');
    setDate('');
  }
  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Name"
          data-testid="input-name-test"
        />
        {!isNameValid(name)&&(<p className="error mt-2" >
          Name must be at least 4 characters long and only contain letters and spaces
        </p>)}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
        />
        {!isEmailValid(email)&&( <p className="error mt-2">Email must be a valid email address</p> )}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={empid}
          onChange={(e)=>setEmpid(e.target.value)}
          placeholder="Employee ID"
        />
        {!isEmpIdValid(empid) && (<p className="error mt-2">Employee ID must be exactly 6 digits</p> )}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={joindate}
          onChange={(e)=>setDate(e.target.value)}
          placeholder="Joining Date"
        />
        {!isJoiningDateValid(joindate)&&(<p className="error mt-2">Joining Date cannot be in the future</p>)}
      </div>
      <button data-testid="submit-btn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
