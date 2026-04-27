import { useParams } from "react-router-dom";
import data from "../data/data.json";

function Detail() {
  const { name } = useParams();

  const item = data.find((i) => i.itemname === name);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="detail">
      <img src={item.image} alt={item.itemname} />

      <h1>{item.itemname}</h1>
      <h3>{item.category}</h3>

      <div className="props">
        {item.itemprops.map((prop, index) => (
          <div key={index} className="prop">
            <strong>{prop.label}:</strong> {prop.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Detail;