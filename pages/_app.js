import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
// import Raychat from '../components/Raychat ';
// import { Helmet } from 'helmet';


function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        {/* <Helmet>
          <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
        </Helmet> */}
        <Component {...pageProps} />
       {/* <Raychat/> */}
      </Layout>

  )
}

export default MyApp
