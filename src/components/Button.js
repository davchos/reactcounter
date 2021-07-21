import "./css/Button.css";

const Button = (props) => {
  const { counter, setCounter, operation, cls } = props;
  const handleClick = () => {
    if (operation === "+") {
      setCounter(counter + 1);
    } else if (operation === "-") {
      setCounter(counter - 1);
    } else if (operation === "reset") {
      setCounter(0);
    }
    console.log(cls);
  };
  return (
    <button className={cls} onClick={handleClick}>
      {operation}
    </button>
  );
};

export default Button;
