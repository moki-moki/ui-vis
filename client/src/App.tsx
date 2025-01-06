import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/ui/footer';
import { SidebarContextProvider } from '@/context/sidebar-context';
import Home from '@/pages/home/Home';

import Toolkit from './components/toolkit/toolkit';

function App() {
  return (
    <div className="bg-background-color text-center">
      <Sidebar />
      <Toolkit />
      <SidebarContextProvider>
        <Home />
      </SidebarContextProvider>
      <Footer />
    </div>
  );
}

export default App;
