/** React core **/
import React, { useState } from 'react';

/** Contexts **/
import ProjectContext from './ProjectContext';

type ProjectProviderProps = {
  children: React.ReactNode;
};

const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [totalPledge, setTotalPledge] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);

  const incrementTotalPledgeHandler = (value: number) => {
    setTotalPledge(prevState => prevState + value);
  };

  const incrementTotalBackersHandler = (value: number) => {
    setTotalBackers(prevState => prevState + value);
  };

  const projectContext = {
    totalPledge,
    maxPledge: 100000,
    totalBackers,
    daysLeft: 56,
    incrementTotalPledge: incrementTotalPledgeHandler,
    incrementTotalBackers: incrementTotalBackersHandler,
  };

  return <ProjectContext.Provider value={projectContext}>{children}</ProjectContext.Provider>;
};

export default ProjectProvider;
