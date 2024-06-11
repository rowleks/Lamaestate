import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useCallback, useState} from 'react';


function Layout() {

  const [user, setUser] = useState(false);

  const logUser = useCallback(() => {
    setUser(!user);
  }, [user]);

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar user={user} logUser={logUser} />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
