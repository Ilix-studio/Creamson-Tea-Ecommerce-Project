import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "../components/Layout";
import { StateConext } from "../context/StateContext";

const MyApp = ({ Component, pageProps }) => (
  <StateConext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateConext>
);

export default MyApp;
