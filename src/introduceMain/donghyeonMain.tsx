import React from "react";
import Donghyeon from "../introduce/donghyeon";
import StudentList from "../page/student";
import '../introduce/main.css'

function DonghyeonMain () {
  return (
    <div className="main">
      <StudentList />
      <div className="line"></div>
      <Donghyeon />
    </div>
  )
}

export default DonghyeonMain;