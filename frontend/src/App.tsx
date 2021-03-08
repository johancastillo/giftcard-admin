import { useEffect } from 'react';
import { Route, Switch } from 'wouter'

import MenuLateral from './components/MenuLateral'
import TopBar from './components/TopBar'
import Clients from './pages/Clients'
import EditProvider from './pages/EditProvider'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import ProviderProfile from './pages/ProviderProfile'
import Orders from './pages/Orders'

import { useLocation } from "wouter";
import CreateProvider from './pages/CreateProvider';
import GiftCard from './pages/GiftCard';


const App = () => {
  const [location, setLocation] = useLocation();

  // Keywords shotcut
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.ctrlKey === true && e.key == 'a') {
        e.preventDefault()
        setLocation("/pedidos")
      } else if (e.ctrlKey === true && e.key == 'q') {
        e.preventDefault()
        setLocation("/")
      } else if (e.ctrlKey === true && e.key == 'm') {
        e.preventDefault()
        setLocation("/clientes")
      }
    })
  }, [])

  // Render view
  return (
    <>
      <div className="contenedor" id="contenedor">
        <TopBar />
        <MenuLateral />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pedidos" component={Orders} />
          <Route path="/giftcard" component={GiftCard} />
          <Route path="/proveedores/:rif" component={ProviderProfile} />
          <Route path="/editar-proveedor/:id" component={EditProvider} />
          <Route path="/crear-proveedor" component={CreateProvider} />
          <Route path="/clientes" component={Clients} />
          <Route component={PageNotFound} />
        </Switch>


      </div>
    </>
  )
}

export default App;
