/* eslint-disable react/jsx-no-comment-textnodes */
function Props() {
  return (
    <div>
      <h2 className="content-tytle">Props</h2>
      <p>1. Что такое пропсы и зачем они нужны</p>
      <p>2. Передача пропсов компонентам</p>
      <p>3. Доступ к пропсам внутри компонентов</p>
      <h3>Что такое пропсы и зачем они нужны</h3>
      <p>
        Пропсы <b>(сокращение от properties)</b> - это данные, которые
        передаются в компоненты React для настройки их поведения и внешнего
        вида. Они позволяют передавать информацию из родительского компонента в
        дочерний компонент. Дочерний компонент может читать эти
        <code> props </code>и использовать их, например, для вывода данных на
        экран или для изменения своего поведения.
      </p>
      <h3>Передача пропсов компонентам</h3>
      <p>
        Пропсы передаются в компоненты в виде атрибутов при их использовании в
        JSX. Например,{" "}
        <code>{`<ChildComponent message="Привет, Redev!" />`}</code> передает
        пропс
        <code>{` message`}</code> со значением "Привет, Redev!" в компонент
        <code>{` ChildComponent`}</code>.
      </p>
      <pre>
        <code>
          <h5>// Родительский компонент</h5>
          {`const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}`}
          <h5>// Дочерний компонент</h5>
          {`const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}`}
        </code>
      </pre>
      <p>
        В этом примере родительский компонент передает сообщение "Привет,
        Redev!" в дочерний компонент через props. Дочерний компонент выводит это
        сообщение на экран.
      </p>
      <h3>Доступ к пропсам внутри компонентов</h3>
      <p>
        В функциональных компонентах пропсы доступны как параметр функции
        компонента. Например, <code> {`(props) => {...}`}</code>
        <pre>
          <code>
            <h5>// Родительский компонент</h5>
            {`const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}`}{" "}
          </code>
          <code>
            {" "}
            <h5>// Дочерний компонент</h5>
            {`const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}`}{" "}
          </code>
          <code>
            {" "}
            <h5>
              // либо сразу сделать деструктуризацию, ведь props это обычный
              объект
            </h5>
            {`const ChildComponent = ({message}) => {
  return <div>{message}</div>;
}`}
          </code>
        </pre>
      </p>
      <p>
        В классовых компонентах пропсы доступны через <code>this.props</code>.
        Например, <code>this.props.message</code>.
      </p>
      <p>Пример с классовой компонентой:</p>
      <pre>
        <code>
          <h5>//ParentComponent.js</h5>
          {`import ChildComponent from './ChildComponent';

const ParentComponent2 = () => <div>parentComponent2</div>
const obj = {name:'Pasha'}

const ParentComponent = () => {
  return (
    <div>
     <ChildComponent 
      name={'abc'} 
      age={25} 
      parentComponent2={ParentComponent2} 
      object={obj}
     />
    </div>
  );
}

export default ParentComponent;`}
        </code>
      </pre>
      <pre>
        <code>
          <h5>//ChildComponent.js</h5>

          {`import React from 'react'

class ChildComponent extends React.Component{
  render(){
    return (
      <div>
        {this.props.name}
        {this.props.age}
        {this.props.parentComponent2()}
        {this.props.object.name}
      </div>
    );
  }
}

export default ChildComponent`}
        </code>
      </pre>
      <p>
        <code>Props </code>можно использовать для передачи{" "}
        <b>любых данных, включая строки, числа, массивы, объекты и функции.</b>{" "}
      </p>
      <p>
        Пропсы являются <b>неизменяемыми (immutable)</b>, их нельзя изменять
        напрямую.
      </p>
      <p>
        <code>this.props.name = "Vasya"</code> то есть вот так изенить пропс
        name НЕЛЬЗЯ!
      </p>
      <p>
        Однако, можно использовать <b>состояние компонента (state)</b> для
        изменения пропсов.
      </p>
      <p>
        Пропсы в React играют важную роль в передаче данных и настройке
        компонентов. Они позволяют создавать переиспользуемые компоненты.
        Правильное использование пропсов способствует лучшей организации кода и
        разделению ответственности между компонентами.
      </p>
      <h3>ИТОГО:</h3>
      <h4>1. Что такое props в React?</h4>
      <p>
        <code>Props</code> - это объекты, которые передаются в компоненты как
        параметры. Они используются для передачи данных из родительского
        компонента в дочерний.
      </p>
      <h4>2. Как передавать props в компоненты?</h4>
      <p>
        <code>Props</code> можно передавать в компоненты как атрибуты. В
        родительском компоненте нужно указать имя атрибута и значение, которое
        будет передано в дочерний компонент.
      </p>
      <h4>3. Как читать props в компоненте?</h4>
      <p>
        <code>Props</code> можно читать в компоненте через объект{" "}
        <code>props</code>. Этот объект содержит все переданные в компонент
        атрибуты.
      </p>
      <h4>4. Какие данные можно передавать через props?</h4>
      <p>
        <code>Props</code> можно использовать для передачи любых данных, включая
        строки, числа, массивы, объекты и функции.
      </p>
      <h4>5. Можно ли менять пропсы?</h4>
      <p>Нельзя.</p>
      <h4>6. Что делать, если нужно изменить данные в дочернем компоненте?</h4>
      <p>
        Если нужно изменить данные в дочернем компоненте, следует использовать
        состояние (state). Про него поговорим дальше.
      </p>
    </div>
  );
}

export default Props;
