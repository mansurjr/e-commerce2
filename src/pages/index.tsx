import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Blog from "./blog";
import GlobalLoading from "../components/GlobalLoading";
import Review from "./ProductDetail/components/Review";
import Questions from "./ProductDetail/components/Questions";
import Addidtional from "./ProductDetail/components/Addidtional";

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

const AccDetail = lazy(()=> import("./account/component/accDetail"))
const AccLiked = lazy(() => import("./account/component/accLiked"));
const AccCart = lazy(() => import("./account/component/accCart"));




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
            {
              path: "product/:id",
              element: <ProductDetail />,
              children: [
                { index: true, element: <Review /> },
                { path: "questions", element: <Questions /> },
                { path: "additionals", element: <Addidtional /> },
              ],
            },
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
              children: [
                {
                  path: "account",
                  element: <Account />,
                  children: [
                    { index: true, element: <AccDetail /> },
                    { path: "cart", element: <AccCart /> },
                    { path: "liked", element: <AccLiked /> },
                  ],
                },
              ],
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
