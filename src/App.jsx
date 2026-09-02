import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingWhatsApp/>
    </BrowserRouter>
    
  );
}

export default App;
