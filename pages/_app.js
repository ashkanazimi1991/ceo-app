import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import Raychat from '../components/Raychat ';



function MyApp({ Component, pageProps }) {
  return (

      <Layout>
        <Component {...pageProps} />
       <Raychat/>
      </Layout>

  )
}

export default MyApp
