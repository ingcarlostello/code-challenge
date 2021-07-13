import React, { useContext } from "react";
import Header from "./components/Header";

// @Context
import showAgentListContext from "./context/showAgentListContext";

// @Pages
import AgentList from "./pages/AgentList";
import AgentSeeker from "./pages/AgentSeeker";

function App() {
  const {
    //* -States
    showAgentList,
  } = useContext(showAgentListContext);

  return (
    <>
      <Header />
      {showAgentList ? <AgentSeeker /> : <AgentList />}
    </>
  );
}

export default App;
