import { Layout } from "./Layout";
import { Topbar } from "./Topbar";
import ApexChart from "./ApexChart";
function App() {
  return (
    <>
     <Topbar />
      <section>
        <Layout />
        <section>
          <ApexChart />
        </section>
      </section>
    </>
  );
}

export default App;
