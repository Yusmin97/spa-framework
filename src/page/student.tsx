import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './student.css'

const students = [
  '김우진',
  '방승희',
  '변호녕',
  '소사무엘',
  '송영준',
  '신동현',
  '오승민',
  '유승민',
  '윤준현',
  '이민구',
  '이유안',
  '이채이',
  '정영식',
  '최성민',
  '최은철',
  '홍문기'
]

const StudentList = () => {
  // 현재 페이지의 경로를 저장하는 상태
  const [currentPath, setCurrentPath] = useState("");

  // useLocation 훅을 사용하여 현재 페이지의 경로를 가져옴
  const location = useLocation();

  // 페이지가 렌더링될 때마다 현재 페이지의 경로를 상태에 저장
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="studentList">
      <ul>
        {students.map((student) => (
          <li key={student}>
            <Link
              to={`/${student}`}
              style={{
                // 현재 페이지의 이름이면 검은색, 아니면 회색으로 표시
                color: currentPath === `/${student}` ? "black" : "gray",
                // 현재 페이지의 이름이면 투명도를 1, 아니면 0.5로 설정
                opacity: currentPath === `/${student}` ? 1 : 0.5,
              }}
            >
              {student}
            </Link>
            {/* 점을 표시하는 span 요소 */}
            <span
              style={{
                // 점의 크기와 모양을 설정
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                // 점의 위치를 절대값으로 설정
                position: "absolute",
                // 현재 페이지의 이름이면 원래 위치로, 아니면 추측으로 이동
                left: currentPath === `/${student}` ? "50px" : "100px",
                // 점의 색상을 현재 페이지의 이름이면 검은색, 아니면 회색으로 설정
                backgroundColor: currentPath === `/${student}` ? "black" : "gray",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
