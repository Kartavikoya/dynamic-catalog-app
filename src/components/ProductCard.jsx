import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
    const navigate = useNavigate();
    const preview = item.itemprops.slice(0, 2).map((prop) => prop.value).join(' · ');

    const goToDetail = () => navigate(`/item/${encodeURIComponent(item.itemname)}`);

    return (
        <div
            className="card"
            role="button"
            tabIndex={0}
            onClick={goToDetail}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') goToDetail();
            }}
        >
            
            <img src={item.image} alt={item.itemname} />
            <div className="card-body">
                {/* <span className="card-badge">{item.category}</span> */}
                <h3>{item.itemname}</h3>
                <p className="card-preview">{preview}</p>
            </div>
        </div>
    );
}

export default ProductCard;