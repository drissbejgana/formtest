import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Start from './component/startup/start';
// import TableM from './component/Table-matieres/Table-M';
// import Sections from './component/sections/sections';
import StartUp from './component/form/form';

function App() {
  return (
    <Router>
      {/* <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/table" element={<TableM />} />
        <Route path="/sections" element={<Sections />} />
      </Routes> */}
      <StartUp/>
    </Router>
  );
}

export default App;
