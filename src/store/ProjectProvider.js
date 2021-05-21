/** React core **/
import React, { useState } from 'react';

/** Contexts **/
import ProjectContext from './ProjectContext';

const ProjectProvider = props => {
  const [totalPledge, setTotalPledge] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);

  const incrementTotalPledgeHandler = value => {
    setTotalPledge(prevState => prevState + value);
  };

  const incrementTotalBackersHandler = value => {
    setTotalBackers(prevState => prevState + value);
  };

  const projectContext = {
    totalPledge,
    maxPledge: 100000,
    totalBackers,
    daysLeft: 56,
    incrementTotalPledge: incrementTotalPledgeHandler,
    incrementTotalBackers: incrementTotalBackersHandler
  };

  return (
    <ProjectContext.Provider value={ projectContext }>
      { props.children }
    </ProjectContext.Provider>
  )
};

export default ProjectProvider;
