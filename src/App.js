import './App.css';
import LeftMenu from './Components/LeftMenu';
import MiddleMenu from './Components/MiddleMenu';
import RightMenu from './Components/RightMenu';

function App() {
  return (
    <div className="App">
      
      <LeftMenu />
      <MiddleMenu />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
