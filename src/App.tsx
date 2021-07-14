import React, { useContext } from "react";
import Header from "./components/Header";

import { AgentsContext } from "./context/AgentsContext";

// @Pages
import AgentList from "./pages/AgentList";
import AgentSeeker from "./pages/AgentSeeker";

function App() {
  const { agentSeekerPage } = useContext(AgentsContext);

  return (
    <>
      <Header />
      {agentSeekerPage ? <AgentSeeker /> : <AgentList />}
    </>
  );
}

export default App;
