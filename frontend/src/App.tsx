import { useEffect } from 'react';
import { Route, Switch } from 'wouter'

import MenuLateral from './components/menu-lateral/MenuLateral'
import TopBar from './components/top-bar/TopBar'
import Clients from './pages/clients/Clients'
import EditProvider from './pages/edit-provider/EditProvider'
import Home from './pages/home/Home'
import PageNotFound from './pages/page-not-found/PageNotFound'
import ProviderProfile from './pages/provider-profile/ProviderProfile'
import Orders from './pages/orders/Orders'

import { useLocation } from "wouter";
import CreateProvider from './pages/create-provider/CreateProvider';
import GiftCard from './pages/giftcard/GiftCard';


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
