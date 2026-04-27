import data from '../data/data.json';
import CategorySection from '../components/CategorySection';

function Home(){
    const grouped = data.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            return acc;
        }, {});
    return(
        <div className="container">
            <h1>Product Catalog</h1>
            
            {Object.keys(grouped).map((category) => (
                <CategorySection
                    key={category}
                    title={category}
                    items={grouped[category]}
                />
            ))}
        </div>
    );

    }

export default Home;