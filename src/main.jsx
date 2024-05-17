
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import Authprovider from './contexts/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authprovider>
    <RouterProvider router={router} />
  </Authprovider>,
)
