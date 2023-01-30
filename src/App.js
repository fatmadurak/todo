
import './index.css';
import Header from './components/Header';
import Content from "./components/Content"
import Footer from './components/Footer';
import { TodoContextProvider } from './Context/TodoContext';


function App() {
  return (

    <TodoContextProvider>
  <section className="todoapp">

   <Header/>
   <Content/>
  </section>
  <Footer/>
  </TodoContextProvider>
 
  );
}

export default App;
