import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pages from "./flexibleContents/pages";
import Users from "./flexibleContents/UserDetails"
import Nav from "./pages/Nav";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Nav pages={pages} user={Users} />

        <Routes>
          {pages.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
