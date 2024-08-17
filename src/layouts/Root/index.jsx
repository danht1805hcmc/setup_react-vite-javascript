import { Outlet } from 'react-router-dom';
import './styles.module.scss';

function RootLayout() {
  return (
    <div className='root-layout'>
      <h1>Header</h1>

      <Outlet />

      <h1>Footer</h1>
    </div>
  );
}

export default RootLayout;
