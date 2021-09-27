import './App.css';
import './w3.css';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom';
import { Layout }  from './components/Layout';
import { Booking } from './components/Booking';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Booking} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
