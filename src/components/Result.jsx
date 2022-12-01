import Photo from "./Photo";
import NotFound from "./NotFound";
// Result component for rendering the data from api.
const Result = ({ data, type }) => {
  if (data.length > 0) {
    // Show the results if there is data.
    return (
      <div className="photo-container">
        <h2>{type}</h2>
        <ul>
          {/* Loop throug the data array and show an image */}
          {data.map((img, index) => (
            <Photo
              key={index}
              url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    // Show NotFound Component if there is no data.
    return (
      <div className="photo-container">
        <ul>
          <NotFound />
        </ul>
      </div>
    );
  }
};

export default Result;
