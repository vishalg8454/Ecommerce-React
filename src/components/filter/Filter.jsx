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
                <li Name="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label for="fiction"> Fiction</label><br/>
                </li>
                <li className="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label for="sci-fi"> Sci-Fi</label><br/>
                </li>
                <li className="category-list-item">
                    <input type="checkbox" name="category"/>
                    <label for="novel"> Novel</label><br/>
                </li>
            </ul>
            <p className="filter-label">Rating</p>
            <ul className="category-list">
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="4"/>
                    <label for="4star">{"4 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="3"/>
                    <label for="3star">{"3 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="2"/>
                    <label for="2star">{"2 Stars & above"}</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="4star" name="rating" value="1"/>
                    <label for="1star">{"1 Stars & above"}</label>
                </li>
            </ul>
            <p className="filter-label">Sort by</p>
            <ul className="category-list">
                <li className="category-list-item">
                    <input type="radio" id="low" name="sort"/>
                    <label for="low">Price - Low to High</label>
                </li>
                <li className="category-list-item">
                    <input type="radio" id="high" name="sort"/>
                    <label for="high">Price - High to Low</label>
                </li>
            </ul>
        </aside>
    );
}
export {Filter};