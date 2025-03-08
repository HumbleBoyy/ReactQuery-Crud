import _React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './styles/globals.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { GlobalContext } from './context/context';
import { ThemeProvider } from "@gravity-ui/uikit";

const queryClient = new QueryClient({
      defaultOptions:{
         queries:{
            retry:1,
            staleTime:1000 * 60 * 5,
            // @ts-ignore
            cacheTime:1000 * 60 * 10,
            refetchOnWindowFocus:false
         }
      }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
    <ThemeProvider>
       <GlobalContext>
         <QueryClientProvider client={queryClient}>
            <App/>
         </QueryClientProvider>
       </GlobalContext>
      </ThemeProvider>
    </BrowserRouter>
);
