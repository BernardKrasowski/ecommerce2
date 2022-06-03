import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

function Home() {
  return (
    <div className="categories-container">
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
