import Head from './components/head/Head';
import Forms from './components/forms/Forms';
import './App.css';
import {useRef} from 'react';

function App() {
 const ref = useRef(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return(
    <>
    <Head handleScroll={handleScroll}/>
    <Forms/>
    <div ref={ref}></div>
    </>
  )
}

export default App;
