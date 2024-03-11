import { useState } from 'react';
import './App.css';
import Box from './component/Box'; // 박스 컴포넌트 불러오기

const choice = {
  rock: {
    name: 'Rock',
    img: 'https://i.pinimg.com/564x/d5/af/5d/d5af5df8a879bdcd3b797f8647377355.jpg',
  },
  paper: {
    name: 'Paper',
    img: 'https://mblogthumb-phinf.pstatic.net/MjAxODA2MTVfMjIz/MDAxNTI5MDQ2NzU1MDYx.mdkQcjK8LSdeVH3RQOhV76OWT5HGajqbILD02GvunMUg.s7dXmrvubiDktBChGgtBzubQX1WZrR-DZp-m5UFlk3Ig.JPEG.lhy7341/FB_IMG_1529024513438.jpg?type=w800',
  },
  scissors: {
    name: 'Scissors',
    img: 'https://i.pinimg.com/564x/a0/50/76/a050760105c7245ab5e22b7eca7b863a.jpg',
  },
};

function App() {
  const [gameStarted, setGameStarted] = useState(false); // 게임 시작 여부 상태
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else if (user.name === 'Rock') {
      return computer.name === 'Scissors' ? 'win' : 'lose';
    } else if (user.name === 'Scissors') {
      return computer.name === 'Paper' ? 'win' : 'lose';
    } else if (user.name === 'Paper') {
      return computer.name === 'Rock' ? 'win' : 'lose';
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  // 게임 시작 버튼 클릭 시 게임 시작 상태 변경
  const startGame = () => {
    setGameStarted(true);
  };

  // 게임이 시작되지 않았을 때는 게임 시작 버튼을 보여줌
  if (!gameStarted) {
    return (
      <div className="start">
        <button onClick={startGame}>Game Start</button>
      </div>
    );
  }

  // 게임이 시작되면 게임 화면을 보여줌
  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main btn-area">
        <button class="game-btn sci" onClick={() => play('scissors')}>
          <i class="fa-regular fa-hand-scissors"></i>
        </button>
        <button class="game-btn rock" onClick={() => play('rock')}>
          <i class="fa-regular fa-hand-back-fist"></i>
        </button>
        <button class="game-btn paper" onClick={() => play('paper')}>
          <i class="fa-regular fa-hand"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
