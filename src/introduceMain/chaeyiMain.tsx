import React from "react";
import Chaeyi from "../introduce/chaeyi";
import StudentList from "../page/student";
import '../introduce/main.css'

function ChaeyiMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Chaeyi />
    </div>
  )
}

export default ChaeyiMain;