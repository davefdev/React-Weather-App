import logo from './logo.svg';
import './App.scss';
import SearchBar from './components/search-bar';

//functional component
//returns a template, doesnt have too much config, or methods, or functions inside a class that is used to manipulate/create logic
//just returns a template )what is being rendered in the UI
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
