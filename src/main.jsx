import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Index from './pages/index/index.jsx';
import History from './pages/history/history.jsx';
import Guides from './pages/guides/guides.jsx';
import Layout from "./pages/layout.jsx";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: 'history',
                element: <History />,
                children: [
                    {
                        path: 'shoelace'
                    }, {
                        path: 'rope'
                    }, {
                        path: 'necktie'
                    }
                ]
            },
            {
                path: 'guides',
                element: <Guides />,
                children: [
                    {
                        path: 'shoelace',
                    }, {
                        path: 'rope',
                    }, {
                        path: 'necktie'
                    }
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={extendTheme({
          components: {
              Button: {
                  baseStyle: {
                      fontWeight: "light"
                  }
              }
          }
      })}>
          <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>,
)
