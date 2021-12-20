import React from "react";

const University = ({ list }) => {
  return list.map((item) => {
    return (
      <div className="column">
        <div className="ui raised segment">
          <div className="ui item">
            <p>{item.name}</p>
            <a href={item.web_pages}>{item.web_pages}</a>
          </div>
        </div>
      </div>
    );
  });
};

export default University;
