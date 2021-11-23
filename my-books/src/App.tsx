import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:bid" element={<Edit />} />
          <Route path="/book/:bid" element={<Book />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
