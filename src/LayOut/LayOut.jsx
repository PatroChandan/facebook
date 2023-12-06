import React from "react";
//Pages....
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import {
  BrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import ChatBox from "../pages/chatbox/ChatBox";
// Components............
import Nav from "../components/nav/Nav";
import LeftBar from "../components/leftbar/LeftBar";
import RightBar from "../components/rightbar/RightBar";
import PrivateRoute from "./PrivateRoute";
import SearchPage from "../pages/searchPage/SearchPage";
import CommingSoon from "../pages/commingSoon/CommingSoon";

const LayOut = () => {
  // Feed.......
  const Feed = () => {
    return (
      <>
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    );
  };

  // Router.....
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Feed />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/chatbox",
          element: <ChatBox />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Feed />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile/id" element={<Profile />} />
              <Route path="/chatbox" element={<ChatBox />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/comming" element={<CommingSoon />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default LayOut;
