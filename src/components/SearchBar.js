import { React, useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.label === "Postal Code") {
      const regex = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]/;
      if (regex.test(searchTerm)) {
        props.onClick(searchTerm);
        setSearchTerm("");
      } else {
        alert("Please enter correct postal code");
        setSearchTerm("");
      }
    } else {
      props.onClick(searchTerm);
      setSearchTerm("");
    }
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
                      onChange={(e) =>
                        setSearchTerm(e.target.value.toUpperCase())
                      }
                      min={props.min}
                      max={props.max}
                      minLength={props.minLength}
                      maxLength={props.maxLength}
                      placeholder={props.placeholder}
                      pattern="[A-Z0-9a-z]{3}"
                      title="Three characters in format A2A"
                      required
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
