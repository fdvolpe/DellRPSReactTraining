import logo from './logo.svg';
import './App.css';

export var C1 = () => <h2>This is the component 1</h2>;
export const C2 = () => <h3>This is the component 2</h3>;

//REACT COMPONENT
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <C1/>
      <C2/>
    </>
  );
}

export default App;
