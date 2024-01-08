import { useState } from "react";
import { Button } from "react-bootstrap";

function Events() {
  let [isTrue, setIsTrue] = useState(true);
  function handleClick() {
    setIsTrue(!isTrue);
  }
  return (
    <div>
      <h2 className="content-tytle">Обработка событий (Events)</h2>
      <p>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие.
      </p>
      <p>
        Вот пять наиболее часто используемых событий в React и примеры их
        применения:
      </p>
      <p>
        <b>1. onClick (Клик):</b>
      </p>
      <p>
        Событие <code>onClick</code> возникает при клике на элементе. Это одно
        из наиболее распространенных событий в React.
      </p>
      <pre>
        <code>{`const handleClick = () => {
  console.log('Кликнули!');
}

const MyComponent = () => {
  return (
    <button onClick={handleClick}>Нажми меня</button>
  );
}`}</code>
      </pre>
      <p>
        <div className="count">
          <Button className={"toggle__btn"} onClick={() => handleClick()}>
            {isTrue ? "ON" : "OFF"}
          </Button>
        </div>

        <p></p>
        <b>2. onChange (Изменение):</b>
      </p>
      <p>
        Событие <code>onChange</code> возникает при изменении значения элемента
        формы, такого как текстовое поле (input), флажок (checkbox) или выбор
        элемента списка (radio).
      </p>
      <pre>
        <code>{`const handleChange = (event) => {
  console.log('Изменилось значение:', event.target.value);
}

const MyComponent = () => {
  return (
    <input type="text" onChange={handleChange} />
  );
}`}</code>
      </pre>
      <p>
        В React параметр <code>event</code> в callback-функции представляет
        объект события, который генерируется при изменении значения элемента
        формы или компонента. <code>event.target.value</code> содержит текущее
        значение <code>input</code> элемента.
      </p>
      <p>
        <p>
          <b>3. onSubmit (Отправка формы):</b>
        </p>
        <p>
          Событие <code>onSubmit</code> возникает при отправке формы. Оно
          позволяет выполнить действия, связанные с отправкой данных формы на
          сервер.
        </p>
        <pre>
          <code>{`const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Форма отправлена!');
}

const MyComponent = () => {
  return (
    <form onSubmit={handleSubmit}>
      {/* Ваши поля формы */}
      <button type="submit">Отправить</button>
    </form>
  );`}</code>
        </pre>
        <b>4. onMouseOver (Наведение курсора):</b>
      </p>
      <p>
        Событие <code>onMouseOver</code> возникает, когда курсор наводится на
        элемент. Оно может использоваться для отображения дополнительной
        информации или изменения состояния компонента при наведении.
      </p>
      <pre>
        <code>{`const handleMouseOver = () => {
  console.log('Курсор наведен!');
}

const MyComponent = () => {
  return (
    <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
  );
}`}</code>
      </pre>
      <p>
        <b>5. onKeyDown (Нажатие клавиши):</b>
      </p>
      <p>
        Событие <code>onKeyDown</code> возникает при нажатии клавиши на
        клавиатуре. Оно позволяет реагировать на определенные комбинации клавиш
        или выполнять действия на основе нажатых клавиш.
      </p>
      <pre>
        <code>{`const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`}</code>
      </pre>
      <p>Конечно, это только НЕСКОЛЬКО ПРИМЕРОВ популярных событий в React. </p>
      <p>
        Существует множество других событий, таких как <code>onFocus</code>,{" "}
        <code>onBlur</code>, <code>onScroll</code> и т. д., которые могут быть
        использованы в зависимости от конкретных потребностей приложения.
      </p>
    </div>
  );
}

export default Events;
