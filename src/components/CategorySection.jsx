import ProductCard from '../components/ProductCard';

function CategorySection({title, items}){
    return(
        <div className='category'>
            <h2>{title}</h2>
            <div className='grid'>
                {items.map((item) => (
                    <ProductCard key ={item.itemname} item = {item} />
                ))}
            </div>
        </div>
    );

}

export default CategorySection;