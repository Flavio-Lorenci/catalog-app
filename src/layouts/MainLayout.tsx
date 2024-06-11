import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.tsx';

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
