import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import LayoutDefault from './components/Layout/LayoutDefault'
import HeaderOnly from "./components/Layout/HeaderOnly";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map(
              (route, index) => {
                const Page = route.component
                let Layout = LayoutDefault
                if(route.layout === null) {
                  Layout = Fragment
                } else if(route.layout === HeaderOnly) {
                  Layout = HeaderOnly
                }
                return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
                } />
              }
            )
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
