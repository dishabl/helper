import { useState, useRef } from "react";
import { Button } from "react-bootstrap";
function Refs() {
  const [text, setText] = useState("");
  const textInput = useRef(null);
  const valid = () => {
    textInput.current.focus();
  };
  return (
    <div>
      <h2 className="content-tytle">Refs</h2>
      <p>
        Refs (далее просто “ссылки”) предоставляет способ доступа к DOM-узлам
        или React-элементам, созданным в методе <code>render()</code>.
      </p>
      <p>Есть несколько хороших примеров использования ссылок:</p>
      <p>1. Управление фокусом, выделение текста.</p>
      <p>2. Выполнение анимаций.</p>
      <p>3. Интеграция со сторонними библиотеками, взаимодействующие с DOM.</p>
      <p>
        <b>Управление фокусом - лучший из них:</b>
      </p>
      <pre>
        <code>{`import React, { useEffect, useState, Fragment, useRef } from 'react'

const Test = () => {
    const [text, setText] = useState('')
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
            <input ref={textInput} value={text} />
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}</code>
      </pre>
      <div className="refForm">
        <input className="refInput" ref={textInput} value={text} />
        &nbsp;
        <button className="refButton" onClick={() => valid()}>
          Click to focus
        </button>
      </div>
    </div>
  );
}

export default Refs;
