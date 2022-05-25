import { useRef, useState } from "react";

export function CarDetail({ initialData }) {
  const [data, setData] = useState(initialData);

  const formRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();

    const model = event.target.elements.model.value;
    const year = event.target.elements.year.value;
    const color = event.target.elements.color.value;

    console.log({
      model,
      year,
      color,
    });
  }
  console.log(data);

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmitForm}>
        <input type="text" name="model"></input>
        <input type="text" name="year"></input>
        <input type="text" name="color"></input>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}
