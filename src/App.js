import Todo from './Components/Todo';
import './index.css';

function App() {
  return (
    <div>
      <h1 className="h1"> HELLO!! </h1>
      <Todo text="Learn React" />
      <Todo text="Master React"/>
      <Todo text="Get an INTERNSHIP"/>
    </div>
  );
}

export default App;
