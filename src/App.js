import logo from './logo.svg';
import './App.css';
import Box from './component/Box'; // 박스 컴포넌트 불러오기

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼 클릭 시 클릭한 값이 박스에 보인다.
// 4. 컴퓨터 결과 박스에는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 결정한다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정)

// jsx 컴포넌트는 반드시 하나의 덩어리를 리턴해야 한다.
// onclick x - >  ☆ onClick

// 함수를 호출하는 형식으로 넣으면 UI를 랜더링할 때 바로 함수가 실행되어 버림
// 함수를 전달하는 형식 사용 - > 콜백함수 형태로 함수를 전달해줘야 한다 !
// EX) onClick={() => play('scissors')}

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://i.pinimg.com/564x/59/7d/6d/597d6d18da21653580bc120569c08d45.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://i.pinimg.com/564x/d1/b3/ff/d1b3fff5d18e54411732680f12f0257a.jpg',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://i.pinimg.com/564x/7e/c6/95/7ec6954e96ca40a53523a8028cad5dca.jpg',
  },
};

function App() {
  const play = (userChoice) => {
    console.log('선택됨!', userChoice);
  };
  return (
    <div>
      <div className="main">
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className="main">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
    </div>
  );
}

export default App;
