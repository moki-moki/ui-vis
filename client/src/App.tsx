import Home from '@/pages/home/Home';

import Toolkit from './components/toolkit/toolkit';
import Footer from '@/components/ui/footer';

function App() {
  return (
    <div className="bg-background-color text-center">
      <Toolkit />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
