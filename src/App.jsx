import "./App.css";
import ProductTab from "./ProductTab";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
import LikeButton from "./likeButton.jsx";

function App() {
  return (
    <>
      <h2>Blockbuster Deals | Shop Now</h2>
      <ProductTab />
      &nbsp; &nbsp; &nbsp;
      <h4>Next Excercise: Event Handlers </h4>
      <Button />
      <Form />
      &nbsp; &nbsp; &nbsp;
      <Counter />
      &nbsp; &nbsp; &nbsp;
      <LikeButton/>
    </>
  );
}

export default App;
