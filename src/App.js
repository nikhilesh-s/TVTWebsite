import './App.css';
import Web from './page.jsx'
import ProjectsPage from './projects.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressPage from './progress.jsx';
import ArticlesPage from './Article.jsx';
import OfficersPage from './officers.jsx';

function App() {
  

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Web />} />
        {/*<Route path="/projects" element={<ProjectsPage />} />*/}
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/officers" element={<OfficersPage />} />
      </Routes>
    </Router>
  );
}

export default App;