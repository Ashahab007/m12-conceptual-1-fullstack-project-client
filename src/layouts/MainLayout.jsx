import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
const MainLayout = () => {
  // 1.0 As i am going to run server side and client in one vs code so there is a import issue creates. to resolve this issue first type cmd to open a terminal => type "code --new-window" => go to file in vscode => add folder to workspace => select the sever => then again add folder to workspace => select the client
  return (
    <div className="bg-white">
      <Navbar />
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
