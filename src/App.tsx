import {createBrowserRouter, RouterProvider, NavLink, Outlet} from "react-router";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";

const routes = [
  { path: "/", element: <Home />, name: "Home" },
  { path: "/about", element: <About />, name: "About" },
  { path: "/contact", element: <Contact />, name: "Contact" },
];

const Layout = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navigation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {routes.map((route) => (
              <li className="nav-item" key={route.path}>
                <NavLink to={route.path}className={({ isActive }) =>isActive ? "nav-link active fw-bold text-primary" : "nav-link"}
                  end={route.path === "/"}>
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element })),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;