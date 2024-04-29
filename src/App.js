import { Layout } from "./Layout";
import { Topbar } from "./Topbar";
import ApexChart from "./ApexChart";
import ApexRound from "./ApexRound";
import ApexLine from "./ApexLine";
import "./app.css";
import WidgetContainer from "./WidgetContainer";
function App() {
  return (
    <>
     <Topbar />
      <section className="unic-class">
        <Layout />
        <section>
          <ApexChart />
          <ApexRound />
          <ApexLine />
        </section>
      </section>
      <WidgetContainer />
    </>
  );
}

export default App;
