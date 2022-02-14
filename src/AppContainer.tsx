import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Path from './base/constant/RoutePath';
import { AlertBox } from './component/alert/Alert';
import DataNotFound from './component/error/DataNotFound';
import Loader from './component/loader/Loader';
import DashBoard from './pages/DashBoard';

function AppContainer() {
  return (
    <Router>
      <div id="wrapper" className="wrapper">
        <Suspense fallback={<Loader loading={true} />}>
          <AlertBox />
          <div className="main-page d-flex">
            <Loader />
            <div className="main-content col">
              <Routes>
                <Route path={Path.DASHBOARD} element={<DashBoard />} />
                <Route element={<DataNotFound />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      </div>
    </Router>
  );
}
export default AppContainer;
