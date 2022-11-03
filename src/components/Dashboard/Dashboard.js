import { useEffect } from "react";
import { useState } from "react";
import "./Dashboard.css";
import Navbar from "../Nav/Navbar";
import Card from "./Card";
import DashboardData from "./Dashboarddata";

const Dashboard = () => {
  const [data, setDashboardData] = useState([]);

  useEffect(() => {
    setDashboardData(DashboardData);
  }, []);
  return (
    <>
      <Navbar />
      <div className=".container-sm dashboard">
        {data.map((each) => (
          <Card
            key={each.id}
            title={each.title}
            icon={each.icon}
            statistics={each.statistics}
            description={each.description}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
