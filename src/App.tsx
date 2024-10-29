import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { AuthContextProvider} from './contexts/auth';
import MainLayout from './components/Layouts/MainLayout';
import OpenLayout from './components/Layouts/OpenLayout';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Terms from './pages/Terms';
import ErrorPage from './pages/ErrorPage';
import TeamPage from './pages/TeamPage';
import UnAuthProtection from './components/Protection/UnAuthProtection';
import AuthProtection from './components/Protection/AuthProtection';
import './App.css'


const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          staleTime: 5 * 60 * 1000,
          retry: 0,
      },

  },
});



function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Navigate to="/login"/>}/>
            <Route element={<AuthProtection/>}>
              <Route element={<MainLayout/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/team' element={<TeamPage/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/donate' element={<Donate/>}/>
                <Route path='/terms' element={<Terms/>}/>
              </Route>
            </Route>
            <Route element={<UnAuthProtection/>}>
              <Route element={<OpenLayout/>}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Registration/>}/>
                <Route path='*' element={<ErrorPage/>}/>
              </Route>
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;