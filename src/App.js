import React, {useState} from 'react';
import './App.css';


/////Game can be won by both players in one round
/////Game can be won by both players in one round
/////Game can be won by both players in one round
/////Game can be won by both players in one round
/////Game can be won by both players in one round


function App() {
  
  const [startXorO, setStartXorO] = useState('X')

  const [XorO, setXorO] = useState('X');

  const [posOne, setPosOne] = useState('');
  const [posTwo, setPosTwo] = useState('')
  const [posThree, setPosThree] = useState('')
  const [posFour, setPosFour] = useState('')
  const [posFive, setPosFive] = useState('')
  const [posSix, setPosSix] = useState('')
  const [posSeven, setPosSeven] = useState('')
  const [posEight, setPosEight] = useState('')
  const [posNine, setPosNine] = useState('')
  
  const [xCombOne, setXCombOne] = useState(0);
  const [xCombTwo, setXCombTwo] = useState(0);
  const [xCombThree, setXCombThree] = useState(0);
  const [xCombFour, setXCombFour] = useState(0);
  const [xCombFive, setXCombFive] = useState(0);
  const [xCombSix, setXCombSix] = useState(0);
  const [xCombSeven, setXCombSeven] = useState(0);
  const [xCombEight, setXCombEight] = useState(0);
  
  const [oCombOne, setOCombOne] = useState(0);
  const [oCombTwo, setOCombTwo] = useState(0);
  const [oCombThree, setOCombThree] = useState(0);
  const [oCombFour, setOCombFour] = useState(0);
  const [oCombFive, setOCombFive] = useState(0);
  const [oCombSix, setOCombSix] = useState(0);
  const [oCombSeven, setOCombSeven] = useState(0);
  const [oCombEight, setOCombEight] = useState(0);

  const [posOneOnOff, setPosOneOnOff] = useState(false);
  const [posTwoOnOff, setPosTwoOnOff] = useState(false);
  const [posThreeOnOff, setPosThreeOnOff] = useState(false);
  const [posFourOnOff, setPosFourOnOff] = useState(false);
  const [posFiveOnOff, setPosFiveOnOff] = useState(false);
  const [posSixOnOff, setPosSixOnOff] = useState(false);
  const [posSevenOnOff, setPosSevenOnOff] = useState(false);
  const [posEightOnOff, setPosEightOnOff] = useState(false);
  const [posNineOnOff, setPosNineOnOff] = useState(false);

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  

  const NewGame = () => {
    if (startXorO === 'X') {
      setStartXorO('O');
      setXorO('O');
    } else {
      setStartXorO('X');
      setXorO('X');
    }
    setPosOne('');
    setPosTwo('');
    setPosThree('');
    setPosFour('');
    setPosFive('');
    setPosSix('');
    setPosSeven('');
    setPosEight('');
    setPosNine('');
    setXCombOne(0);
    setXCombTwo(0);
    setXCombThree(0);
    setXCombFour(0);
    setXCombFive(0);
    setXCombSix(0);
    setXCombSeven(0);
    setXCombEight(0);
    setOCombOne(0);
    setOCombTwo(0);
    setOCombThree(0);
    setOCombFour(0);
    setOCombFive(0);
    setOCombSix(0);
    setOCombSeven(0);
    setOCombEight(0);
    setPosOneOnOff(false);
    setPosTwoOnOff(false);
    setPosThreeOnOff(false);
    setPosFourOnOff(false);
    setPosFiveOnOff(false);
    setPosSixOnOff(false);
    setPosSevenOnOff(false);
    setPosEightOnOff(false);
    setPosNineOnOff(false);
  }

console.log(oCombOne)
console.log(oCombTwo)
console.log(oCombThree)
console.log(oCombFour)
console.log(oCombFive)
console.log(oCombSix)
console.log(oCombSeven)
console.log(oCombEight)

  return (<>
  <div>
    <div className="players-scores-div">
      <span className="scores-span score-one">Player One (X): {playerOneScore}</span>
      <span className="scores-span score-two">Player Two (O): {playerTwoScore}</span>
    </div>
      <div className="grid">
        <div className="line-div">
          
          {!posOneOnOff ? (<>{XorO === 'X' ? (<div className="box-one" onClick={() => {setPosOne('X') ; setXorO('O') ; setPosOneOnOff(true); setXCombOne(xCombOne + 1) ; setXCombFour(xCombFour + 1) ; setXCombSeven(xCombSeven + 1) ;
          {if (xCombOne === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFour === 2) {setPlayerOneScore(playerOneScore + 1); setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSeven === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posOne}
          </div>) : (<div className="box-one" onClick={() => {setPosOne('O') ; setXorO('X') ; setPosOneOnOff(true); setOCombOne(oCombOne + 1) ; setOCombFour(oCombFour + 1) ; setOCombSeven(oCombSeven + 1) ;
          {if (oCombOne === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFour === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSeven === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posOne}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-one" >{posOne}
          </div>) : (<div className="box-one" >{posOne}
          </div>)}</>)}
          
          {!posTwoOnOff ? (<>{XorO === 'X' ? (<div className="box-two" onClick={() => {setPosTwo('X') ; setXorO('O') ; setPosTwoOnOff(true); setXCombOne(xCombOne + 1) ; setXCombFive(xCombFive + 1) ;
          {if (xCombOne === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFive === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posTwo}
          </div>) : (<div className="box-two" onClick={() => {setPosTwo('O') ; setXorO('X') ; setPosTwoOnOff(true); setOCombOne(oCombOne + 1) ; setOCombFive(oCombFive + 1) ;
          {if (oCombOne === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFive === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posTwo}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-two" >{posTwo}
          </div>) : (<div className="box-two" >{posTwo}
          </div>)}</>)}

          {!posThreeOnOff ? (<>{XorO === 'X' ? (<div className="box-three" onClick={() => {setPosThree('X') ; setXorO('O') ; setPosThreeOnOff(true); setXCombOne(xCombOne + 1) ; setXCombSix(xCombSix + 1) ; setXCombEight(xCombEight + 1) ;
          {if (xCombOne === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSix === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombEight === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posThree}
          </div>) : (<div className="box-three" onClick={() => {setPosThree('O') ; setXorO('X') ; setPosThreeOnOff(true); setOCombOne(oCombOne + 1) ; setOCombSix(oCombSix + 1) ; setOCombEight(oCombEight + 1) ;
          {if (oCombOne === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSix === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombEight === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} }
            }}>{posThree}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-three" >{posThree}
          </div>) : (<div className="box-three" >{posThree}
          </div>)}</>)}
        </div>
        <div className="line-div">
        {!posFourOnOff ? (<>{XorO === 'X' ? (<div className="box-four" onClick={() => {setPosFour('X') ; setXorO('O') ; setPosFourOnOff(true); setXCombTwo(xCombTwo + 1) ; setXCombFour(xCombFour + 1) ;
          {if (xCombTwo === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFour === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posFour}
          </div>) : (<div className="box-four" onClick={() => {setPosFour('O') ; setXorO('X') ; setPosFourOnOff(true); setOCombTwo(oCombTwo + 1) ; setOCombFour(oCombFour + 1) ;
          {if (oCombTwo === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFour === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posFour}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-four" >{posFour}
          </div>) : (<div className="box-four" >{posFour}
          </div>)}</>)}

          {!posFiveOnOff ? (<>{XorO === 'X' ? (<div className="box-five" onClick={() => {setPosFive('X') ; setXorO('O') ; setPosFiveOnOff(true); setXCombTwo(xCombTwo + 1) ; setXCombFive(xCombFive + 1) ; setXCombSeven(xCombSeven + 1) ; setXCombEight(xCombEight + 1) ;
          {if (xCombTwo === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFive === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSeven === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombEight === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posFive}
          </div>) : (<div className="box-five" onClick={() => {setPosFive('O') ; setXorO('X') ; setPosFiveOnOff(true); setOCombTwo(oCombTwo + 1) ; setOCombFive(oCombFive + 1) ; setOCombSeven(oCombSeven + 1) ; setOCombEight(oCombEight + 1) ;
          {if (oCombTwo === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFive === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSeven === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombEight === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posFive}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-five" >{posFive}
          </div>) : (<div className="box-five" >{posFive}
          </div>)}</>)}

          {!posSixOnOff ? (<>{XorO === 'X' ? (<div className="box-six" onClick={() => {setPosSix('X') ; setXorO('O') ; setPosSixOnOff(true); setXCombTwo(xCombTwo + 1) ; setXCombSix(xCombSix + 1) ;
          {if (xCombTwo === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSix === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posSix}
          </div>) : (<div className="box-six" onClick={() => {setPosSix('O') ; setXorO('X') ; setPosSixOnOff(true); setOCombTwo(oCombTwo + 1) ; setOCombSix(oCombSix + 1) ;
          {if (oCombTwo === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSix === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posSix}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-six" >{posSix}
          </div>) : (<div className="box-six" >{posSix}
          </div>)}</>)}
        </div>
        <div className="line-div">

        {!posSevenOnOff ? (<>{XorO === 'X' ? (<div className="box-seven" onClick={() => {setPosSeven('X') ; setXorO('O') ; setPosSevenOnOff(true); setXCombThree(xCombThree + 1) ; setXCombFour(xCombFour + 1) ; setXCombEight(xCombEight + 1) ;
          {if (xCombThree === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFour === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombEight === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posSeven}
          </div>) : (<div className="box-seven" onClick={() => {setPosSeven('O') ; setXorO('X') ; setPosSevenOnOff(true); setOCombTwo(oCombThree + 1) ; setOCombFour(oCombFour + 1) ; setOCombEight(oCombEight + 1) ;
          {if (oCombThree === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFour === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombEight === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posSeven}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-seven" >{posSeven}
          </div>) : (<div className="box-seven" >{posSeven}
          </div>)}</>)}

          {!posEightOnOff ? (<>{XorO === 'X' ? (<div className="box-eight" onClick={() => {setPosEight('X') ; setXorO('O') ; setPosEightOnOff(true); setXCombThree(xCombThree + 1) ; setXCombFive(xCombFive + 1) ;
          {if (xCombThree === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombFive === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posEight}
          </div>) : (<div className="box-eight" onClick={() => {setPosEight('O') ; setXorO('X') ; setPosEightOnOff(true); setOCombThree(oCombThree + 1) ; setOCombFive(oCombFive + 1) ;
          {if (oCombThree === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombFive === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posEight}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-eight" >{posEight}
          </div>) : (<div className="box-eight" >{posEight}
          </div>)}</>)}

          {!posNineOnOff ? (<>{XorO === 'X' ? (<div className="box-nine" onClick={() => {setPosNine('X') ; setXorO('O') ; setPosNineOnOff(true); setXCombThree(xCombThree + 1) ; setXCombSix(xCombSix + 1) ; setXCombSeven(xCombSeven + 1) ;
          {if (xCombThree === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSix === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (xCombSeven === 2) {setPlayerOneScore(playerOneScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posNine}
          </div>) : (<div className="box-nine" onClick={() => {setPosNine('O') ; setXorO('X') ; setPosNineOnOff(true); setOCombThree(oCombThree + 1) ; setOCombSix(oCombSix + 1) ;  setOCombEight(oCombSeven + 1) ;
          {if (oCombThree === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSix === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)} else if (oCombSeven === 2) {setPlayerTwoScore(playerTwoScore + 1) ; setPosOneOnOff(true) ; setPosTwoOnOff(true) ; setPosThreeOnOff(true) ; setPosFourOnOff(true) ; setPosFiveOnOff(true) ; setPosSixOnOff(true) ; setPosSevenOnOff(true) ; setPosEightOnOff(true) ; setPosNineOnOff(true)}}
            }}>{posNine}
          </div>)}</>) : (<>{XorO === 'X' ? (<div className="box-nine" >{posNine}
          </div>) : (<div className="box-nine" >{posNine}
          </div>)}</>)}
        </div>
      </div>
      <div className="button-div">
        <button className="ng-button" onClick={NewGame}>New Game</button>
      </div>
    </div>
    </>);
}

export default App;
