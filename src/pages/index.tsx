import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Blog from "./blog";
import GlobalLoading from "../components/GlobalLoading";


const MainLayout = lazy(() => import("./layout"));

const Home = lazy(() => import("./home"));
const Shop = lazy(() => import("./shop"));
const Cart = lazy(() => import("./cart"));
const Liked = lazy(() => import("./liked"));
const ContactUs = lazy(() => import("./contactUs"));
const Login = lazy(() => import("./login"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const NotFound = lazy(() => import("./notFound"));
const SignIn = lazy(() => import("./sign-in"));

const Account = lazy(() => import("./account"));
const Auth = lazy(() => import("./auth"));

const AppRouter = () => {
  return (
    <Suspense fallback={<GlobalLoading />}>
      {useRoutes([
        // public routes with layout
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "cart", element: <Cart /> },
            { path: "liked", element: <Liked /> },
            { path: "contact", element: <ContactUs /> },
            { path: "login", element: <Login /> },
            { path: "product/:id", element: <ProductDetail /> },
            { path: "blog", element: <Blog /> },
          ],
        },
        
        // private route
        {
          path: "/",
          element: <Auth />,
          children: [
            {
              path: "",
              element: <MainLayout />,
              children: [{ path: "account", element: <Account /> }],
            },
          ],
        },
        
        // public route without layout
        { path: "/sign-in", element: <SignIn /> },
        { path: "*", element: <NotFound /> },
      ])}
    </Suspense>
  );
};

export default memo(AppRouter);
