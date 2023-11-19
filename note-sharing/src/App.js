import './App.css';
import FrontPage from './components/front-page.js';
import { app, database } from './firebaseConfig';

function App() {
  return (
    <div className="frontpage">
    <FrontPage />
    </div>
  );
}

export default App;