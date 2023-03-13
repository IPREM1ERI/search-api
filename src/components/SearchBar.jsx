function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit()
  };

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default SearchBar