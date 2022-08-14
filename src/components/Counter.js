import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const [counter, show] = useSelector((state) => [
    state.counter.counter,
    state.counter.showCounter,
  ]);

  const incClickHandler = () => {
    dispatch(counterActions.increment());
  };

  const incBy5ClickHandler = () => {
    dispatch(counterActions.increase({ value: 5 }));
  };

  const decClickHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incClickHandler}>Inc</button>
        <button onClick={incBy5ClickHandler}>Inc by 5</button>
        <button onClick={decClickHandler}>Dec</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
