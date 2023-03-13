import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    searchImages(term)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList />
    </>
  );
}

export default App;
