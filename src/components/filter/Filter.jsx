import "./filter.css";

const Filter = () =>{
    return(
        <aside className="filter">
            <p className="filter-label">Filters</p>
            <p className="filter-label">Price</p>
            <div className="slider-container">
                <div className="label-container">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>
                <input className="slider" type="range" min="0" max="100" value="50"/>
            </div>
            <p className="filter-label">Category</p>
            <ul className="category-list">
                <li className="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label htmlFor="fiction"> Fiction</label><br/>
                </li>
                <li className="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label htmlFor="sci-fi"> Sci-Fi</label><br/>
                </li>
                <li className="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label htmlFor="novel"> Novel</label><br/>
                </li>
            </ul>
            <p className="filter-label">Rating</p>
            <ul className="category-list">
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="4"/>
                    <label htmlFor="4star">{"4 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="3"/>
                    <label htmlFor="3star">{"3 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="2"/>
                    <label htmlFor="2star">{"2 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="1"/>
                    <label htmlFor="1star">{"1 Stars & above"}</label>
                </li>
            </ul>
            <p className="filter-label">Sort by</p>
            <ul className="category-list">
                <li className="category-list-item">
                    <input type="radio" id="low" name="sort"/>
                    <label htmlFor="low">Price - Low to High</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="high" name="sort"/>
                    <label htmlFor="high">Price - High to Low</label>
                </li>
            </ul>
        </aside>
    );
}
export {Filter};