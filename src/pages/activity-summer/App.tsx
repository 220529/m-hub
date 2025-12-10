import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Rule from './views/Rule';
import Share from './views/Share';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/share" element={<Share />} />
    </Routes>
  );
}
