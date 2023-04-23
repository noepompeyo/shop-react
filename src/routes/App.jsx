import React from 'react'
import Layout from '../containers/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'

import RecoveryPassword from  '../pages/RecoveryPassword'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SendEmail  from '../pages/SendEmail'
import NewPassword  from '../pages/NewPassword'
import MyAccuount  from '../pages/MyAccuount'
import CreateAcount  from '../pages/CreateAcount'
import Checkout from '../pages/Checkout'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Orders from '../pages/Orders'


function App() {
 const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState} >
    <BrowserRouter>
      <Layout>
    <Routes>
        <Route path='/shop-react/'  element={<Home/>} />
        <Route  path='/shop-react/login' element={<Login/>} />
        <Route  path='/shop-react/recovery-password' element={<RecoveryPassword/>}/>
        <Route path='/shop-react/send-email' element={<SendEmail/>}/>
        <Route path='/shop-react/new-password' element={<NewPassword/>}/>
        <Route path='/shop-react/account' element={<MyAccuount/>}/>
        <Route path='/shop-react/signup' element={<CreateAcount/>}/>
        <Route path='/shop-react/checkout' element={<Checkout/>}/>
        <Route path='/shop-react/orders' element={<Orders/>}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
