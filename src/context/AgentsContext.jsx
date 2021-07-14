import React, { createContext, useEffect, useState } from "react";

export const AgentsContext = createContext();

const AgentsProvider = (props) => {
  const [agentsList, setAgentsList] = useState([]);
  const [filteredAgentsByMoney, setFilteredAgentsByMoney] = useState([]);
  const [agentSeekerPage, setAgentSeekerPage] = useState(true);
  const [income, setIncome] = useState(null);
  const [count, setCount] = useState(0);
  const [firtsThreeAgents, setFirtsThreeAgents] = useState([]);






  useEffect(() => {
    const getAllAgents = async () => {
      let response = await fetch("http://localhost:3000/AGENTS_LIST.json");
      let result = await response.json();
      setAgentsList(result);
    };
    getAllAgents();
  }, []);
  console.log(agentsList);










  const filterAgents = (amountMoney) => {
    if (amountMoney) {
      setIncome(amountMoney);
      const filterAgents = agentsList.filter(
        (agents) =>
          agents.income >= amountMoney - 10000 &&
          agents.income <= amountMoney + 10000
      );
      setFilteredAgentsByMoney(filterAgents);
    //   getFirstThreeAgents()
    }
    setAgentSeekerPage(false);
  };






// useEffect(() => {

//     getFirstThreeAgents()
// }, [income])


//   useEffect(() => {
    const getFirstThreeAgents = () => {
      if (count > filteredAgentsByMoney.length ) {
        console.log("There are not more agents that match your search");
        return;
      } else {
        let index = count + 3;
        // let index = count



        let firstThree = filteredAgentsByMoney.slice(0, index);
        setCount(index);
        setFirtsThreeAgents(firstThree);
      }
    // let index = count
    // let firstThree = filteredAgentsByMoney.slice(0, index+3);
    // setCount(index);
    // setFirtsThreeAgents(firstThree);
    };
//     getFirstThreeAgents()
//   }, [filteredAgentsByMoney, agentSeekerPage]);
// }, [agentSeekerPage]);


const showLeesAgentsOnlist = () => {
    if(count === 0 || firtsThreeAgents.length === 0){
        console.log("There are no more agents on the list");
        return
    }else if(firtsThreeAgents.length > 0){
        let index = count - 3;
        let showLessThree = firtsThreeAgents.slice(0, index);
        setCount(index)
        setFirtsThreeAgents(showLessThree)
        console.log('quito 3 agents', firtsThreeAgents);
    }
}












  console.log(filteredAgentsByMoney);
  console.log(firtsThreeAgents);

  return (
    <AgentsContext.Provider
      value={{
        //* state
        agentsList,
        filteredAgentsByMoney,
        agentSeekerPage,
        income,
        firtsThreeAgents,

        //* functions
        filterAgents,
        getFirstThreeAgents,
        showLeesAgentsOnlist,
      }}
    >
      {props.children}
    </AgentsContext.Provider>
  );
};

export default AgentsProvider;
