import React from "react";
import './App.css';
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider";

const Header = lazy(() => import ('./components/Header/Header'));
const Contact = lazy(() => import ('./components/Contact/Contact'));
const About = lazy(() => import ('./components/About/About'));

const App = () => {
  
  return (
    <ContextProvider>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Header />
        </Suspense>
        <Routes>
          <Route path="/" element={<Suspense fallback={<>Loading...</>}><About /></Suspense>}/>
          <Route path="/contact" element={<Suspense fallback={<>Loading...</>}><Contact /></Suspense>}/>
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
