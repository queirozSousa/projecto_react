import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layouts/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Company</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/newproject'>New</Link>
      </ul>
      <Container customClass='min-height'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/newproject' element={<NewProject />} />
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
