// components/Calculator.jsx
"use client";
import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]); // Store history as an array

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const calculationResult = eval(expression);
        setHistory([...history, `${expression} = ${calculationResult}`]); // Add to history array
        setResult(calculationResult.toString());
        setExpression(calculationResult.toString());
      } catch (error) {
        setResult('Error 😭');
        setExpression('');
      }
    } else if (value === 'C') {
      setResult('');
      setExpression('');
      // setHistory([]); // Clear history on 'C'
    } else if (value === 'CE') {
      setExpression(expression.slice(0, -1));
      setResult(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
      setResult(expression + value);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
      <div className="calculator flex flex-col items-center justify-center p-4 md:order-1">
        <input type="text" value={result} readOnly className="w-full p-2 text-2xl text-black bg-white text-right border border-gray-300 rounded-lg mb-4" />
        <div className="buttons grid grid-cols-4 gap-2 p-2 border-2 border-white rounded-lg">
          <button onClick={() => handleClick('7')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">7</button>
          <button onClick={() => handleClick('8')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">8</button>
          <button onClick={() => handleClick('9')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">9</button>
          <button onClick={() => handleClick('/')} className="p-2 text-lg font-bold text-black bg-orange-200 hover:bg-orange-300 rounded-lg">/</button>
          <button onClick={() => handleClick('4')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">4</button>
          <button onClick={() => handleClick('5')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">5</button>
          <button onClick={() => handleClick('6')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">6</button>
          <button onClick={() => handleClick('*')} className="p-2 text-lg font-bold text-black bg-orange-200 hover:bg-orange-300 rounded-lg">*</button>
          <button onClick={() => handleClick('1')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">1</button>
          <button onClick={() => handleClick('2')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">2</button>
          <button onClick={() => handleClick('3')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">3</button>
          <button onClick={() => handleClick('-')} className="p-2 text-lg font-bold text-black bg-orange-200 hover:bg-orange-300 rounded-lg">-</button>
          <button onClick={() => handleClick('0')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">0</button>
          <button onClick={() => handleClick('.')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">.</button>
          <button onClick={() => handleClick('00')} className="p-2 text-lg font-bold text-black bg-gray-200 hover:bg-gray-300 rounded-lg">00</button>
          <button onClick={() => handleClick('+')} className="p-2 text-lg font-bold text-black bg-orange-200 hover:bg-orange-300 rounded-lg">+</button>
          <button onClick={() => handleClick('C')} className="p-2 text-lg font-bold text-black bg-red-200 hover:bg-red-300 rounded-lg col-span-2">C</button>
          <button onClick={() => handleClick('=')} className="p-2 text-lg font-bold text-black bg-green-200 hover:bg-green-300 rounded-lg">=</button>
        </div>
      </div>
      <div className="history-section flex flex-col items-center justify-center p-4 md:order-2" >
        <p className='text-xl'>History</p>
        <div className="calculator flex flex-col border-2 rounded-lg justify-center overflow-y-auto bg-black h-80 p-2 text-white">
          {history && history.length === 0 && <p className="text-sm text-red-400">No history yet</p>}
          <ul>
            {history.map((item, index) => (
              <li className="text-sm text-orange-200" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;