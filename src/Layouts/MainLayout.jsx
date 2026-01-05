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

      {/* FULL WIDTH */}
      <Navbar />

      {/* PAGE CONTENT ONLY */}
      <main className="max-w-7xl mx-auto px-4 lg:px-6 my-6 min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>

      {/* FULL WIDTH */}
      <Footer />
    </div>
  );
};

export default MainLayout;
