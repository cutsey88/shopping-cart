import './styles/App.css';
import { Outlet } from "react-router-dom";
import Header from './components/header';

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
