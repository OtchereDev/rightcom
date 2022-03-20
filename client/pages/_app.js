import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react"
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
