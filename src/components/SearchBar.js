import { React, useState } from "react";

const SearchBar = (props) => {
  const [userId, setUserId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = userId;
    props.onClick(userID);
    setUserId("");
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
                    Search by User ID
                  </label>
                  <div className="ui action input">
                    <input
                      type="number"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
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
