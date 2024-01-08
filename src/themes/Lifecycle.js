function Lifecycle() {
  return (
    <div>
      <h2 className="content-tytle">Методы жизненного цикла (Lifecycle)</h2>
      <p>Основные методы жизненного цикла:</p>
      <p>1. constructor ()</p>
      <p>Обычно в React конструкторы используются только для двух целей:</p>
      <ul>
        <li>
          Инициализация локального состояния путем присвоения объекта
          this.state.
        </li>
        <li>Привязка методов обработчика событий к экземпляру.</li>
      </ul>
      <pre>
        <code>{`    constructor(props) {
                super(props);
                this.state = { counter: 0 };
                this.handleClick = this.handleClick.bind(this);
            }`}</code>
      </pre>
      <p>2. render ()</p>

      <p>Рендеринг компонента. Отдает JSX.</p>
      <pre>
        <code>{` render () {
                return (
                    <div>
                        'Hello'
                    </div>
                )
            }`}</code>
      </pre>
      <p>3. componentDidMount()</p>
      <p>
        componentDidMount() вызывается сразу после монтирования компонента
        (вставки в дерево). Используется для отправки запросов на серверк
        удаленным ресурсам, setTimeout, обращение к DOM-элементам.
      </p>
      <pre>
        <code>{` componentDidMount()`}</code>
      </pre>
      <p>4. componentDidUpdate(prevProps, prevState)</p>
      <p>
        Вызывается после обновления компонента. В качестве парапметров
        передаются старые значения объектов: props и state.
      </p>
      <pre>
        <code>{`componentDidUpdate(prevProps, prevState) {
                if (this.props.userID !== prevProps.userID) {
                    this.fetchData(this.props.userID);
                }
            }`}</code>
      </pre>
      <p>5. componentWillUnmount()</p>
      <p>
        Вызывается перед удалением компонента из DOM. Используется для закрытия
        асинхронных запросов, таймеров.
      </p>
      <pre>
        <code>{`componentWillUnmount() {
                alert("The component named Header is about to be unmounted.");
            }`}</code>
      </pre>
      <p>
        Для использования методов жизненного цикла в функциональных компонентах
        предназначек хук useEffect.
      </p>
    </div>
  );
}

export default Lifecycle;
