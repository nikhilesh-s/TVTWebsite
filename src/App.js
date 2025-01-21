import './App.css';
import Web from './page.jsx'
import ProjectsPage from './projects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticlesPage from './Article.jsx';
import TeamPage from './team.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;