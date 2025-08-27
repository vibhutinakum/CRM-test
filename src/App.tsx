import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./fonts/stylesheet.css";
import CandidateDetail from "./components/CandidateDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route - redirect to candidates list */}
          <Route path="/" element={<Navigate to="/candidate/231" replace />} />
          {/* Candidate detail route with ID parameter */}
          <Route path="/candidate/:id" element={<CandidateDetail />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
