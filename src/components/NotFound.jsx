import React from "react";

const NotFound = () => {
  // NotFound Component for showing when there is no data.
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
};

export default NotFound;
