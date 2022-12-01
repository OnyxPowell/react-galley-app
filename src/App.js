import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Result from "./components/Result";
import Nav from "./components/Nav";
import Search from "./components/Search";
import apiKey from "./config";
import { useEffect, useState } from "react";

function App() {
  // States for app
  const [dogsPic, setDogsPic] = useState([]);
  const [catsPic, setCatsPic] = useState([]);
  const [birdsPic, setBirdsPic] = useState([]);
  const [searchPic, setSearchPic] = useState([]);
  // load the data when the page loads
  useEffect(() => {
    const fetchData = async () => {
      setDogsPic(await getPics("dog"));
      setCatsPic(await getPics("cat"));
      setBirdsPic(await getPics("bird"));
    };
    fetchData();
  }, []);
  // function for getting pics from the flickr
  async function getPics(search) {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
    );
    const data = await response.json();
    if (data.photos) {
      return data.photos.photo;
    }
    return [];
  }

  // Search Click Handler for search form.
  async function handleSearchClick(e, text) {
    e.preventDefault();
    if (text.length > 0) {
      setSearchPic(await getPics(text));
    } else {
      setSearchPic([]);
    }
  }

  return (
    <div className="container">
      <BrowserRouter>
        {/* Search form */}
        <Search clickHandler={handleSearchClick} />
        {/* Navigation component */}
        <Nav />
        {/* Routes */}
        <Routes>
          {/* Redirects to cats page when it goes to home page. */}
          <Route exact path="/" element={<Navigate to="cats" />} />
          <Route
            path="/cats"
            element={<Result data={catsPic} type="Cat Gifs" />}
          />
          <Route
            path="/dogs"
            element={<Result data={dogsPic} type="Dog Gifs" />}
          />
          <Route
            path="/birds"
            element={<Result data={birdsPic} type="Bird Gifs" />}
          />
          <Route
            path="/search"
            element={<Result data={searchPic} type="Result" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
