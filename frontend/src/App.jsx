import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Design from './pages/Design';
import Run from './pages/Run';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/run" element={<Run />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
