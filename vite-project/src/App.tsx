import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Updates from "./components/Updates";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
