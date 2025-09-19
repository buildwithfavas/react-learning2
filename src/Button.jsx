function handleClick() {
  console.log("Hello!");
}

function handleParaClick() {
  console.log("Bye");
}

function handleDblClick() {
  console.log("Double clicked");
}

function handleMouseHover() {
  console.log("Mouse hovered");
}

export default function Button() {
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <p onClick={handleParaClick}>Click here for Bye</p>
      <p onMouseOver={handleMouseHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, error temporibus necessitatibus fugit delectus adipisci dignissimos eius enim voluptate ex ipsam debitis voluptatibus mollitia minus deserunt modi ab aperiam consectetur.</p>
      <button onDoubleClick={handleDblClick}>Double Click Me</button>
    </>
  );
}
