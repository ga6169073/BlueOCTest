import { Routes, Route } from 'react-router-dom';
import Posts from './Features/posts/Posts';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
    </Routes>
  )
}

export default App;
