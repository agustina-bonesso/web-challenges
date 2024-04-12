import "./Card.css";

export default function Card({ id, name, color }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  );
}
