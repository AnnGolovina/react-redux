import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ReduxStoreType } from './redux/types';
import { useDispatch } from 'react-redux/es/exports';
import { Todos } from './components/Todos';

function App() {
  const counter = useSelector((store: {counter: number}) => store.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch({type: "INCREMENT_COUNTER"});
  const decrement = () => dispatch({type: "DECREMENT_COUNTER"});

  const update = (newCounter: number) => dispatch({type: "UPDATE_COUNTER", payload: newCounter});

  return (
    <div>

    <h1>Hello friends!!</h1>
    <h2> Counter: {counter}</h2>
    <button onClick={() => decrement()}>Decrement</button>
    <button onClick={() => increment()}>Increment</button>

<p>
    {[0, 10, 20, 30].map((n) => <button key={n} onClick={() => update(n)}>counter = {n}</button>)}
</p> 

<Todos/>
    </div>
  );
}

export default App;
