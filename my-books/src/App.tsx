import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Add from "./pages/Add";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import { ConnectedRouter } from "connected-react-router";
import history from "./history";
// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Routes>
          <Route path="/edit/:bid" element={<Edit />} />
          <Route path="/book/:bid" element={<Book />} />
          <Route path="/add" element={<Add />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
