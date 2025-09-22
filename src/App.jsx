import "./App.css";
import ProductTab from "./ProductTab";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./likeButton.jsx";
import LudoGame from "./LudoGame.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import { sum } from "./helper";

function App() {
  // for sum=15 lucky draw
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  // For equal numbers lucky draw
  // let winCondition = (ticket) => {
  //   return ticket.every((num) => num === ticket[0]);
  // };

  return (
    <>
      <h4>Excercise 1 : Amazon Card </h4>
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
      <hr></hr>
      <h4>Excercise 2 : Event Handlers </h4>
      <Button />
      <Form />
      &nbsp; &nbsp; &nbsp;
      <Counter />
      <hr></hr>
      <h4>Excercise 3 : Toggle Like Button </h4>
      <LikeButton />
      <hr></hr>
      <h4>Excercise 4 : Ludo Game </h4>
      <LudoGame />
      <hr></hr>
      <h4>Excercise 5 : TodoList </h4>
      <TodoList />
      <hr></hr>
      <h4>Excercise 6 : Lottery Game </h4>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
