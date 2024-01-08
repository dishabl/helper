function ReactMemo() {
  return (
    <div>
      <h2 className="content-tytle">React.memo</h2>
      <p>
        <b>React.memo</b> — это функция высшего порядка (Higher Order Component)
        в библиотеке React, которая оптимизирует производительность
        функциональных компонентов. Она предназначена для предотвращения
        ненужного повторного рендеринга компонента, когда его пропсы и состояние
        не изменились.
      </p>
      <p>
        По умолчанию, при каждом изменении состояния или пропсов компонент
        перерисовывается, даже если результирующий визуальный вывод не
        изменился. Это может быть неэффективно для компонентов, которые не
        зависят от изменений внешних данных и всегда отображают одинаковый
        результат.
      </p>
      <p>
        <code>React.memo</code> использует механизм мемоизации,{" "}
        <b>чтобы запоминать предыдущий результат рендеринга</b> компонента и
        сравнивать его с текущими пропсами. Если пропсы не изменились,{" "}
        <code>React.memo</code> предотвращает повторный рендеринг компонента,
        возвращая сохраненный результат.
      </p>
      <p>Пример использования React.memo:</p>
      <pre>
        <code>{`import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов
  return (
    <div>
      {props.text}
    </div>
  );
});`}</code>
      </pre>
      <p>
        <code>React.memo</code> также принимает второй необязательный аргумент в
        виде функции сравнения (compareFunction), которая позволяет
        контролировать, какие пропсы должны считаться "равными". Если функция
        сравнения не указана,
        <code>{` React.memo`}</code> будет использовать поверхностное сравнение
        (shallow comparison) для сравнения пропсов.
      </p>
      <pre>
        <code>{`import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью 
  // compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
});`}</code>
      </pre>
      <p>
        Использование <code>React.memo</code> позволяет сократить количество
        повторных рендеров и улучшить производительность приложения, особенно
        для компонентов с большим количеством данных или сложными вычислениями
        внутри.
      </p>
    </div>
  );
}

export default ReactMemo;
