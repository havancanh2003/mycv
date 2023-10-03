import Home from "../components/Home";
import CreatCv from "../components/CreatCv";
import PDF from "../components/PDF";

const publicRouter = [
  { path: "/", element: Home },
  { path: "/cv", element: CreatCv },
  { path: "/pdf", element: PDF },
];
export { publicRouter };
