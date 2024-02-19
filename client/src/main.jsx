import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store, persistor} from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import ThemeProvoder from './components/ThemeProvoder.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
  <Provider store={store}>
    <ThemeProvoder>

    <App />
    </ThemeProvoder>

 
  </Provider>
  </PersistGate>

  
)
