import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Index from './pages/index/index.jsx';
import History from './pages/history/history.jsx';
import Guides from './pages/guides/guides.jsx';
import Layout from "./pages/layout.jsx";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import RopeGuides from "./pages/guides/ropes/rope_guides.jsx";

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
                children: [
                    {
                        index: true,
                        element: <History />
                    },
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
                children: [
                    {
                        index: true,
                        element: <Guides />
                    },
                    {
                        path: 'shoelace',
                        element: <RopeGuides />
                    }, {
                        path: 'rope',
                        element: <RopeGuides />
                    }, {
                        path: 'necktie',
                        element: <RopeGuides />
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
