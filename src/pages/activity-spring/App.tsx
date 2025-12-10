import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Rule from './views/Rule';
import Prize from './views/Prize';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/prize" element={<Prize />} />
    </Routes>
  );
}
