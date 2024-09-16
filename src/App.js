import './App.css';
import SearchEngine from "./SearchEngine"

function App() {
  return (
    <div className="App">
      <h1><span className='highlight1'>What's</span> the word?</h1>
      <h2><span className='highlight3'>Search</span> for the meaning of words <span className='highlight2'>below!</span></h2>
      <SearchEngine/>
    </div>
  );
}

export default App;
