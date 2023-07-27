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
import RopeGuidePost from "./components/RopeGuidePost.jsx";

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import AddNewGuide from "./pages/add_new_guide.jsx";

const client = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clkkc0g5b1rf701uh65z9anvw/master',
    cache: new InMemoryCache()
});

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
                path: 'new',
                element: <AddNewGuide />
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
                        element: <RopeGuides />,
                        children: [
                            {
                                path: ':guideId',
                                element: <RopeGuidePost />
                            }
                        ]
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
          <ApolloProvider client={client}>
              <RouterProvider router={router} />
          </ApolloProvider>
      </ChakraProvider>
  </React.StrictMode>,
)
