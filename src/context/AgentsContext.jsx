/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";

export const AgentsContext = createContext();

const AgentsProvider = (props) => {
  const [agentsList, setAgentsList] = useState([]);
  const [filteredAgentsByMoney, setFilteredAgentsByMoney] = useState([]);
  const [agentSeekerPage, setAgentSeekerPage] = useState(true);
  const [income, setIncome] = useState(null);
  const [count, setCount] = useState(0);
  const [firtsThreeAgents, setFirtsThreeAgents] = useState([]);
  const [category, setCategory] = useState('')
  const [seeMore, setSeeMore] = useState(0)

  const selectCategory = (orderBy) => {
    if(orderBy === 'lowIncome'){
        setCategory(orderBy)
        return
    }else if (orderBy === 'highIncome'){
        setCategory(orderBy)
        return
    }else if(orderBy === 'alphabetically') {
        setCategory(orderBy)
        return
    }
  }


  const seeMoreAgents = () => {
    setSeeMore(seeMore + 1)
  }







  useEffect(() => {
    const getAllAgents = async () => {
      let response = await fetch("http://localhost:3000/AGENTS_LIST.json");
      let result = await response.json();
      setAgentsList(result);
    };
    getAllAgents();
  }, []);











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

useEffect(() => {
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
      getFirstThreeAgents()
}, [seeMore, category])
//   useEffect(() => {
    
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




    // const orderAgentsByIncome = () => {
    //     let x = firtsThreeAgents.sort((a, b) => a.income - b.income)
    //     setFirtsThreeAgents(x)
    // }




    
    useEffect(() => {
        const orderBy = () => {
            if(category === 'lowIncome'){
                let x = firtsThreeAgents.sort((a, b) => a.income - b.income)
                setFirtsThreeAgents(x)
            }else if (category === 'alphabetically') {
                let x = firtsThreeAgents.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    } else if (a.name < b.name) {
                        return -1;
                    }
                      return 0;
                })              
                setFirtsThreeAgents(x)
            }else if(category === 'highIncome'){
                let z = firtsThreeAgents.sort((a, b) => b.income - a.income)
                setFirtsThreeAgents(z)
                console.log(z);
                return
            }
        }
        orderBy()
    }, [category])











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
        // getFirstThreeAgents,
        showLeesAgentsOnlist,
        //orderAgentsByIncome,
        // orderBy
        selectCategory,
        seeMoreAgents,
      }}
    >
      {props.children}
    </AgentsContext.Provider>
  );
};

export default AgentsProvider;
