import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClient, QueryClientProvider } from 'react-query'
import './main.css';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { NavermapsProvider } from 'react-naver-maps';

const queryClient = new QueryClient();
const clientId = '891564781837-dtjrnpa138i0qobmebssdhvsgbd58j5q.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={clientId}>
        <NavermapsProvider ncpClientId='prfvjn46fg'>
          <RouterProvider router={router} />
        </NavermapsProvider>
      </GoogleOAuthProvider>
  </QueryClientProvider>
)
