import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestRegister from "./page/guest/GuestRegister";
import Main from "./page/host/Main";
import HostHome from './page/host/HostHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/guest" element={<GuestRegister />}/>
          <Route path="/host/*" element={<HostHome />}/>
          <Route path="/host/:id" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
