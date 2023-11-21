import "./index.css";

//* layouts

import RootLayout from "./layouts/RootLayout";
import Body from "./layouts/Body/body";
import Banner from "./layouts/Body/banner";
//* pages
import Home from "./pages/Home/home";
import Artists from "./pages/Artists/artists";
import Released from "./pages/Released/released";
import Song from "./pages/Song/song";
import Login from "./pages/Login/login";
import ErrorPage from "./pages/ErrorPage/errorpage";
import MyProfile from "./pages/Login/myProfile";
//* Router
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//* router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* //* upper margin ,width */}
      <Route path="/" element={<Body />}>
        {/* //* banner Pages */}
        <Route path="/" element={<Banner />}>
          <Route path="/" element={<Home />} />
          <Route path="artists" element={<Artists />} />
          <Route path="released" element={<Released />} />
          <Route path="song" element={<Song />} />
        </Route>
        {/* //* without Banner */}
        <Route path="login" element={<Login />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
);

function App() {
  //* return
  return <RouterProvider router={router} />;
}

export default App;
