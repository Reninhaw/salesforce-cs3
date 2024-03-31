import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import TesteAB from './pages/TesteAB';
import Cadastro from './pages/Cadastro';
import Chatbot from './pages/Chatbot';
import AlunosRM from './pages/AlunosRM';
import Organograma from './pages/Organograma';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:'/testeab',
    element: <TesteAB/>,
  },
  {
    path:"/cadastro",
    element:<Cadastro />
  },
  {
    path:"/chatbot",
    element:<Chatbot />
  },
  {
    path:"/alunosrm",
    element:<AlunosRM />
  },
  {
    path:"/organograma",
    element:<Organograma />
  }
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
