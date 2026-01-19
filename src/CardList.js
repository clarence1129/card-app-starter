import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(API_URL + "/cards")
      .then(response => response.json())
      .then(data => {
        setCards(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>All Cards</h2>

      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
