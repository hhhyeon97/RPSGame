import { useState } from 'react';
import './App.css';
import Box from './component/Box'; // 박스 컴포넌트 불러오기

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼 클릭 시 클릭한 값이 박스에 보인다.
// 4. 컴퓨터 결과 박스에는 랜덤하게 아이템 선택이 된다.
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 결정한다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면 초록, 지면 빨강, 비기면 검정)

// ++ 스스로 고민해보기
// 유저와 반대되는 컴퓨터 결과 보이게 하기 / 승패에 결과에 따라 테두리 색 바뀌어 보이게 하기

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
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');
  const play = (userChoice) => {
    //console.log('선택됨!', userChoice);
    //userSelect = choice[userChoice]
    // 위 형태처럼 기존 변수형태처럼 값 넣으려고 하면 안 됨 !
    setUserSelect(choice[userChoice]);
    // 랜덤선택하는 함수
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(choice[userChoice], computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  // 유저 입장에서 쓰인 결과 판별 함수
  const judgement = (user, computer) => {
    console.log('user : ', user, 'computer : ', computer);

    // 가위바위보 로직 생각해보기
    // user == computer tie
    // user == rock, computer == scissors / user 이김
    // user == rock, computer == paper / user 졌다
    // user == scissors , computer == paper / user 이김
    // user == scissors , computer == rock / user 졌다
    // user == paper , computer == rock / user 이김
    // user == paper, computer = scissors / user 졌다
    // if(user == computer) < -- 이렇게 객체끼리 비교하는거 아니고 객체 안에 name으로 비교할거

    // if(user.name == computer.name){
    //   return "tie"
    // }else if(user.name=="Rock"){
    //   if(computer=="Scissors"){
    //     return "win"
    //   }else {
    //     return "lose"
    //   }
    // }
    // 삼항연산식으로 변경하기
    if (user.name == computer.name) {
      return 'tie';
    } else if (user.name == 'Rock')
      return computer.name == 'Scissors' ? 'win' : 'lose';
    else if (user.name == 'Scissors')
      return computer.name == 'Paper' ? 'win' : 'lose';
    else if (user.name == 'Paper')
      return computer.name == 'Rock' ? 'win' : 'lose';
  };

  const randomChoice = () => {
    // 객체를 배열로 바꾸기
    let itemArray = Object.keys(choice); // Object.keys - > 객체에 있는 키 값만 뽑아서 배열로 만들어주는 함수다.
    //console.log('아이템 배열', itemArray);
    // 객체를 배열로 바꾸면 각 아이템은 인덱스 번호를 갖게 됨 - > 가위바위보에서는 경우가 3가지니까 0,1,2 사이에서 랜덤한 값
    // 하나만 받아오면 랜덤선택을 할 수 있게 됨 !
    let randomItem = Math.floor(Math.random() * itemArray.length); //Math.floor = > 소수점 아래 버리기
    //console.log('랜덤아이템', randomItem);
    let final = itemArray[randomItem];
    //console.log('final', final);
    return choice[final]; // 여기서 리턴된 값은 위에서 호출한 computerChoice 안에 들어간다.
  };
  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
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
