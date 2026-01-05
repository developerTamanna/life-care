import { Outlet, useNavigation } from 'react-router';
import { RingLoader } from 'react-spinners';
import '../App.css';
import Footer from '../components/Navbar/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <RingLoader color="#36D7B7" size={60} />
        </div>
      )}

      <Navbar />

      <main className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
