import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../components/CardForm";

export default function EditCard() {
  const params = useParams();
  const id = params.id;
  const API_URL = process.env.REACT_APP_API_URL;
  const [card, setCard] = useState(null);

  useEffect(() => {
    fetch(API_URL + "/cards/" + id)
      .then(response => response.json())
      .then(data => setCard(data));
  }, []);

  function updateCard(data) {
    fetch(API_URL + "/cards/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      window.location.href = "/cards";
    });
  }

  if (card === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Edit Card</h2>

      <CardForm
        initialData={card}
        onSubmit={updateCard}
      />
    </div>
  );
}
