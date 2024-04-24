import { Layout } from "./Layout";
import { Topbar } from "./Topbar";
import ApexChart from "./ApexChart";
import ApexRound from "./ApexRound";

import "./app.css"
function App() {
  return (
    <>
     <Topbar />
      <section>
        <Layout />
        <section>
          <ApexChart />
          <ApexRound />
        </section>
      </section>
    </>
  );
}

export default App;
