function UseEffect() {
  return (
    <div>
      <h2 className="content-tytle">UseEffect</h2>
      <p>
        <code>useEffect</code> - это хук в React, предназначенный для работы с
        методами жизненного цикла в функциональных компонентах. По сути вот
        <b> один такой хук</b> заменяет <b>основные</b> методы жизненного цикла.
      </p>
      <pre>
        <code>{`import {useEffect} from 'react';`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - [ ] (аналог componentDidMount).
      </p>
      <pre>
        <code>{`useEffect ( () => { }, [])`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, в качестве
        второго - массив с зависимостью (или несколькими) (аналог
        componentDidUpdate).
      </p>
      <pre>
        <code>{`useEffect ( () => { }, [name])`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, второго
        параметра - нет (аналог componentDidMount + componentDidUpdate).
      </p>
      <pre>
        <code>{` useEffect ( () => { } )`}</code>
      </pre>
      <p>
        UseEffect принимает в качестве первого параметра функцию, которая
        возвращает другую функцию (аналог componentWillUnmount).
      </p>
      <pre>
        <code>{`useEffect ( () => {
                return () => {};
            })`}</code>
      </pre>
    </div>
  );
}

export default UseEffect;
