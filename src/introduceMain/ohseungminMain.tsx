import React from "react";
import Ohseungmin from "../introduce/ohseungmin";
import StudentList from "../page/student";
import '../introduce/main.css'

function OhseungminMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Ohseungmin />
    </div>
  )
}

export default OhseungminMain;