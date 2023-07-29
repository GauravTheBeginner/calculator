import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './App.css';

function App() {
  const [result, setResult] = useState('0');
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo('.calculator', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 });
  }, []);

  const animateButton = (button) => {
    gsap.from(button, { scale: 0, duration: 0.2 });
  };

  const handleButtonClick = (value) => {
    setResult((prevResult) => {
      if (prevResult === '0') {
        return value;
      } else {
        return prevResult + value;
      }
    });

    animateButton(buttonsRef.current[value]);
  };

  const handleCalculate = () => {
    setResult((prevResult) => {
      try {
        
        return eval(prevResult).toString();
      } catch (error) {
        return 'Error';
      }
    });
  };

  const handleClear = () => {
    setResult('0');
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button ref={(el) => (buttonsRef.current['7'] = el)} onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button ref={(el) => (buttonsRef.current['8'] = el)} onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button ref={(el) => (buttonsRef.current['9'] = el)} onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="button-operator" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button ref={(el) => (buttonsRef.current['4'] = el)} onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button ref={(el) => (buttonsRef.current['5'] = el)} onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button ref={(el) => (buttonsRef.current['6'] = el)} onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="button-operator" onClick={() => handleButtonClick('-')}>
          -
        </button>
        <button ref={(el) => (buttonsRef.current['1'] = el)} onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button ref={(el) => (buttonsRef.current['2'] = el)} onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button ref={(el) => (buttonsRef.current['3'] = el)} onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="button-operator" onClick={() => handleButtonClick('*')}>
          *
        </button>
        <button ref={(el) => (buttonsRef.current['0'] = el)} onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button className="button-operator" onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className="button-equal" onClick={() => handleCalculate()}>
          =
        </button>
        <button className="button-operator" onClick={() => handleButtonClick('/')}>
          /
        </button>
        <button className="button-clear" onClick={() => handleClear()}>
          C
        </button>
      </div>
    </div>
  );
}

export default App;
