import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
