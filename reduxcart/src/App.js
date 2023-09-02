
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RouteLayout from "./components/RouteLayout";
import Cart from "./components/Cart";

function App() 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
function App() {
  return (
    
    <div className="m-3 App ">
      <RouterProvider router={router} />
    </div>
  
  );
}

export default App ;