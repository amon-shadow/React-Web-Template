import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppContainer from './AppContainer';
import { ErrorBoundary } from './component/error/ErrorBoundary';
import configureStore from './redux/store/Store';

function App() {
  const store = configureStore();
  const [currentOrientation, setCurrentOrientation] = React.useState<any>("portrait");
  function doOnOrientationChange() {
    switch (window.orientation) {
      case -90: case 90:
        setCurrentOrientation('landscape');
        break;
      default:
        setCurrentOrientation('portrait');
        break;
    }
  }
  useEffect(() => {
    doOnOrientationChange();
    window.addEventListener("orientationchange", doOnOrientationChange, false);
    return () => window.removeEventListener("orientationchange", doOnOrientationChange)
  }, [])

  return (
    (currentOrientation === "portrait") ?
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Provider store={store} >
          <ErrorBoundary>
            <AppContainer />
          </ErrorBoundary>
        </Provider>
      </LocalizationProvider>
      :
      <div className="orientation-wrap">
        <div className="orientation-container">
          <div className="ori-img"><img src="./images/landscape.png" alt="orientation" /></div>
          <div className="ori-head">Please rotate your device</div>
          <div className="ori-text">We don't support landscape mode yet.</div>
        </div>
      </div>
  );
}

export default App;
