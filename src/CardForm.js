import { useState } from "react";

export default function CardForm(props) {
  const [title, setTitle] = useState(props.initialData.title);
  const [description, setDescription] = useState(props.initialData.description);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      title: title,
      description: description
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button type="submit">Save</button>
    </form>
  );
}
