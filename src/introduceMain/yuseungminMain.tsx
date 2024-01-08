import React from "react";
import Yuseungmin from "../introduce/yuseungmin";
import StudentList from "../page/student";
import '../introduce/main.css'

function YuseungminMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Yuseungmin />
    </div>
  )
}

export default YuseungminMain;