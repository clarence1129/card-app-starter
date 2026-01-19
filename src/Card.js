import { Link } from "react-router-dom";

export default function Card(props) {
  const card = props.card;
  const API_URL = process.env.REACT_APP_API_URL;

  function handleDelete() {
    fetch(API_URL + "/cards/" + card.id, {
      method: "DELETE"
    }).then(() => {
      window.location.reload();
    });
  }

  return (
    <div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>

      <Link to={"/cards/" + card.id + "/edit"}>Edit</Link>
      {" "}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
