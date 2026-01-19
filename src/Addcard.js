import CardForm from "../components/CardForm";

export default function AddCard() {
  const API_URL = process.env.REACT_APP_API_URL;

  function addCard(data) {
    fetch(API_URL + "/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      window.location.href = "/cards";
    });
  }

  return (
    <div>
      <h2>Add Card</h2>

      <CardForm
        initialData={{ title: "", description: "" }}
        onSubmit={addCard}
      />
    </div>
  );
}
