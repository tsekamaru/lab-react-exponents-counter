const Counter = ({ countChild, decrementChild, incrementChild }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{countChild}</p>
      <button className="counter-button" onClick={decrementChild}>
        -
      </button>
      <button className="counter-button" onClick={incrementChild}>
        +
      </button>
    </div>
  );
};

export default Counter;
