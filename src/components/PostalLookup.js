import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../actions";
import Place from "./Place";
import SearchBar from "./SearchBar";

const PostalLookup = () => {
  const dispatch = useDispatch();

  const places = useSelector((state) => state.places);
  const [searchedPlace, setSearchedPlace] = useState({});
  const [showComponent, setShowComponent] = useState(false);
  const placehoderText = "Type first three digits of postal code. e.g. T3J";

  useEffect(() => {
    if (places && Object.keys(places).length) {
      setSearchedPlace(places);
    }
  }, [places]);

  useEffect(() => {
    if (searchedPlace && Object.keys(searchedPlace).length) {
      setShowComponent(true);
    }
  }, [searchedPlace]);

  const searchPlaces = (term) => {
    dispatch(fetchPlaces(term));
  };

  return (
    <div>
      <div className="ui center aligned segment">
        <h1>Canada postal lookup page</h1>
        <h5>Search for areas using postal code</h5>
        <SearchBar
          type="text"
          label="Postal Code"
          placeholder={placehoderText}
          onClick={searchPlaces}
          maxLength="3"
          minLength="3"
          pattern="[A-Z0-9a-z]{3}"
        />
      </div>
      {showComponent ? (
        <div
          className="ui center aligned segment"
          style={{ overflow: "auto", minHeight: "50vh", maxHeight: "90vh" }}
        >
          <div className="ui centered two column grid">
            <div className="ui row">
              <h2>Search Result</h2>
            </div>
            <div className="ui row">
              <Place place={searchedPlace} />
            </div>
            <div className="ui row">
              <button
                className="ui green button"
                onClick={() => setShowComponent(false)}
              >
                Clear Search
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PostalLookup;
