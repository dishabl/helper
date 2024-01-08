function Fragment() {
  return (
    <div>
      <h2 className="content-tytle">Фрагмент (Fragment)</h2>
      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM.
      </p>
      <p>
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>
      <pre>
        <code>{`import React, { Fragment } from 'react';

//Заменяем теги div на Fragment:
const ChildComponent = () => <Fragment>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</Fragment>`}</code>
      </pre>
      <p>
        Существует <b>сокращенная запись</b> (импортировать не нужно) -
        недостаток сокращенной записи: нельзя использовать атрибуты, например{" "}
        <code>{`className`}</code> или
        <code>{` key`}</code>:
      </p>
      <pre>
        <code>{`import React, { Fragment } from 'react';

//так хорошо
const ChildComponent = () => <>
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>

// так нельзя. Будет ошибка
const ChildComponent = () => < className="child" >
    <h1>Hello Child Component</h1>
    <h1>Hello Child Component</h1>
</>`}</code>
      </pre>
    </div>
  );
}

export default Fragment;
