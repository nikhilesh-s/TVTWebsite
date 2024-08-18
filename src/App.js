import './App.css';
import Web from './page.jsx'
import ProjectsPage from './projects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const basePath = process.env.NODE_ENV === 'production' ? '/protosync-webcite' : '';

  return (
    <Router basename={basePath}>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;