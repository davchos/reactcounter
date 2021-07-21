import "./css/Button.css";

const Button = (props) => {
  const { counter, setCounter, operation } = props;
  // let display = "inherit";
  // console.log(props);
  const handleClick = () => {
    if (operation === "+") {
      setCounter(counter + 1);
      // if (counter >= 10) display = "none";
    } else if (operation === "-") {
      setCounter(counter - 1);
      // if (counter < 0) display = "none";
    } else if (operation === "reset") {
      setCounter(0);
    }
  };
  return <button onClick={handleClick}>{operation}</button>;
};
export default Button;
