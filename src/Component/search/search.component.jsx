import './search.style.css';
export const SearchField = ({placeholder,handleChange})=>(
  <div className="search-container">
    <input className="search" placeholder={placeholder} onChange={handleChange}/>
  </div>
);