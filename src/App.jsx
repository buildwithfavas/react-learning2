import "./App.css";
import ProductTab from "./ProductTab";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./likeButton.jsx";
import LudoGame from "./LudoGame.jsx";
import TodoList from "./TodoList.jsx";

function App() {
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
    </>
  );
}

export default App;
