import { React, useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onClick(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <div className="ui segment">
        <div className="ui basic center aligned segment">
          <div className="ui fluid container">
            <form class="ui form" onSubmit={handleSubmit}>
              <div className="ui centered two column grid">
                <div class="field twelve wide column">
                  <label style={{ fontSize: "1.3rem" }}>
                    Search by {props.label}
                  </label>
                  <div className="ui action input">
                    <input
                      type={props.type}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      min="1"
                      max="20"
                    />
                    <button type="submit" className="ui primary button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
