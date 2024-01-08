import React from "react";
import Sungmin from "../introduce/sungmin";
import StudentList from "../page/student";
import '../introduce/main.css'

function SungminMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Sungmin />
    </div>
  )
}

export default SungminMain;