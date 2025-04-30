import { RouterProvider, createBrowserRouter } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";
import Acco1 from "./accordian/Acco1.jsx";
// import FramerMotion from "./motion/FramerMotion.jsx";


const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/challenges", element: <ChallengesPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <FramerMotion /> */}

      {/* <Acco1/> */}
    </>
  );
}

export default App;
