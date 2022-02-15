import '../styles/globals.css'
import Header from '../components/Header'
import Side from '../components/side'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div class='body-wrapper'>
        <Side />
        <Component {...pageProps} />  
      </div>
      
    </div>
  )
}

export default MyApp
