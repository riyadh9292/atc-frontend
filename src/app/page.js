import Layout from "./components/layouts/layout/layout";
import Login from "./components/pages/public/login/Login";
import Landing from "./components/pages/public/landing/Landing";

export default function Home() {
  return (
    <Layout>
      <Landing />
      {/* <Login/> */}
    </Layout>
  );
}
