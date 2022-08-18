import React from "react";
import DrowDown from "./components/DrowDown";
import Header from "./components/Header";
import Card from "./components/Card";
import ChartSection from "./components/ChartSection";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Card></Card>
      <DrowDown></DrowDown>
      <ChartSection></ChartSection>
    </div>
  );
};

export default App;
