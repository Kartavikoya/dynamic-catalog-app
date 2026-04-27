import { useMemo, useState } from 'react';
import data from '../data/data.json';
import CategorySection from '../components/CategorySection';

function Home() {
    const grouped = useMemo(() => {
        return data.reduce((acc, item) => {
            if (!acc[item.category]) acc[item.category] = [];
            acc[item.category].push(item);
            
            return acc;
        }, {});
    }, []);

    console.log(grouped,"gropued");
    

    const categories = ['All', ...Object.keys(grouped)];
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const visibleItems = useMemo(() => {
        const normalized = searchTerm.trim().toLowerCase();
        const matchesCategory = (item) =>
        activeCategory === 'All' || item.category === activeCategory;
        if (normalized) {
            return data.filter((item) => {
                const itemText = [item.itemname, item.category, ...item.itemprops.map((prop) => `${prop.label} ${prop.value}`)]
                    .join(' ')
                    .toLowerCase();
                return itemText.includes(normalized) && matchesCategory(item);
            });
        }
    return activeCategory === 'All' ? data : grouped[activeCategory] || [];
    }, [searchTerm, activeCategory, grouped]);

    const searchCategory = useMemo(() => {
        if (!searchTerm || visibleItems.length === 0) return '';
        const categoriesFound = Array.from(new Set(visibleItems.map((item) => item.category)));
        return categoriesFound.length === 1 ? categoriesFound[0] : '';
    }, [searchTerm, visibleItems]);

    const activeTab = searchTerm && searchCategory ? searchCategory : activeCategory;
    // const sectionTitle = searchTerm ? (searchCategory ? searchCategory : 'Search Results') : activeCategory;
    const sectionTitle = searchTerm
    ? (searchCategory ? searchCategory : 'Search Results')
    : activeCategory === 'All'
        ? 'All Products'
        : activeCategory;
    const showResults = Boolean(searchTerm || activeCategory);

    return (
        <div className="container">
            <h1>Product Catalog</h1>

            <div className="page-layout">
                <aside className="category-list">
                    <div className="category-list__title">Categories</div>
                    <div className="category-list__items">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={category === activeCategory ? 'category-item active' : 'category-item'}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setSearchTerm('');
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </aside>

                <div className="content-area">
                    <div className="home-header">
                        <div className="search-wrap">
                            {/* <label htmlFor="catalog-search" className="search-label">
                                Search products, categories, or specs
                            </label> */}
                            <input
                                id="catalog-search"
                                type="search"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Search your products"
                            />
                        </div>
                    </div>

                    {searchTerm ? (
                <div className="search-info">
                    Showing {visibleItems.length} result{visibleItems.length === 1 ? '' : 's'} for "{searchTerm}"
                </div>
            ) : null}

            {showResults ? (
                <CategorySection
                    key={searchTerm ? `search-${activeTab || 'results'}` : activeCategory}
                    title={sectionTitle}
                    items={visibleItems}
                />
            ) : (
                <div className="start-message">
                    Select a category or search for an item to view products.
                </div>
            )}
                </div>
            </div>
        </div>
    );
}

export default Home;