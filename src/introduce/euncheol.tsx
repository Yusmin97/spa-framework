import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

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
  '홍문기',
];


const Euncheol = () => {
    // input text의 값을 저장하는 상태
    const [input, setInput] = useState('');

    // useNavigate 훅을 사용하여 페이지를 이동할 수 있는 함수를 가져옴
    const navigate = useNavigate();
  
    // input text의 값이 변경될 때마다 상태에 저장하는 함수
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    };
  
    // button을 클릭하면 input text의 값과 일치하는 링크로 이동하는 함수
    const handleClick = () => {
      // input text의 값이 students 배열에 포함되어 있으면
      if (students.includes(input)) {
        // 해당 이름의 페이지로 이동
        navigate(`/${input}`);
      } else {
        // 아니면 경고창을 띄움
        alert('해당 이름이 없습니다.');
      }
    };

  return (
    <div className="introduce">
      <div className="nameH2">
        <h2>최은철 소개</h2>
      </div>
      <div className="introducePre">
        <p>
          Lorem ipsum dolor sit amet consectetur. Mauris vitae nullam suspendisse ut amet quis nibh pellentesque. Non ut
          neque pellentesque nisl imperdiet turpis nulla ut. Ut id massa eu eu rhoncus elementum adipiscing metus. Mi
          risus nulla phasellus nisl molestie dignissim risus arcu elementum. Habitasse tortor tempus sed enim lectus
          duis volutpat. Pellentesque lacinia suspendisse sit malesuada sit a faucibus sed mattis. Egestas mauris id
          mattis id pulvinar nunc euismod id diam. Amet amet aliquet pharetra sed nam ipsum aenean dis tempor. Nisl in
          egestas cursus sagittis sed in integer. Sed sed cursus tempor porttitor. Cras viverra arcu sed laoreet
          volutpat enim sem sapien. Est nibh velit eu ipsum praesent vitae vestibulum aliquam. Sagittis nisi faucibus
          libero luctus tincidunt. Porttitor laoreet tellus maecenas tempor. Vehicula ut vulputate lorem congue. Eget
          dignissim aliquam integer tincidunt massa nulla duis mauris. Pellentesque aenean sit mauris morbi.
        </p>
      </div>
      <div className="nameH2">
        <h2>최은철 장점</h2>
      </div>
      <div className="introducePre2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Consectetur morbi fames in id sit turpis eget lectus ut. Neque orci
          hendrerit scelerisque nam ac ac eu dui urna. Aliquet vulputate tortor odio ut. Turpis nam sagittis non
          iaculis. Eu purus mollis cursus sagittis sit. Tempor tempor tincidunt ac in. Ullamcorper eros ullamcorper
          tincidunt sagittis. Libero massa nec gravida libero. Volutpat orci bibendum morbi porta mauris pellentesque.
          Natoque gravida at penatibus vestibulum purus tristique mollis imperdiet amet. Sed magna dignissim luctus cras
          nulla. Ultrices sapien sed quis consectetur turpis fusce sem facilisis eget.
        </p>
      </div>
      {/* input text와 button을 추가 */}
      <div className='pagebox'>
        <input type="text" placeholder="Write your name." value={input} onChange={handleChange} />
        <button onClick={handleClick}>이동</button>
      </div>
    </div>
  );
};

export default Euncheol;