import React from 'react';
import Counter from '../components/Counter';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

const CounterContainer = () => {
  const { number, diff } = useSelector(state => state.counter, shallowEqual);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
};

export default CounterContainer;
