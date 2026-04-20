import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

//provider envuelde el componente principal y le pasa el store 
// Permitimos que el store / estado global) este dusponible para  todos los componentes que se escuentren 
//  anidados en app.
// Todos pueden acceder al estado y despachar las acciones(como le setState).

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
