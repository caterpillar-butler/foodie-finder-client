import { Layout } from 'layouts';
import { Dashboard, NotFound, Register, Login, Mypage } from 'pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </Layout>
  );
}

export default App;
