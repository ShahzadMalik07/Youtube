import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import PlayVideo from './components/PlayVideo';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <Maincontainer />

    },
    {
      path: "/watch",
      element: <PlayVideo />
    }
  ]

}])

function App() {
  return (
    <>
      <Provider store={store}>
   
        <RouterProvider router={appRouter}>
        
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
