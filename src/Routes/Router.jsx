
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Components/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import CheckOut from '../Pages/CheckOut/CheckOut';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>,
        },
        {
          path:'/checkOut/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        
        {
          path: '/checkings', 
          element: <PrivateRoute><Checkings></Checkings></PrivateRoute>
        },
      ]
    },
  ]);
  

export default router;