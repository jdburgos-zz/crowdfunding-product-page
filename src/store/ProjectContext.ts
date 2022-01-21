/** React core **/
import React from 'react';

type ProjectContextType = {
  totalPledge: number;
  maxPledge: number;
  totalBackers: number;
  daysLeft: number;
  incrementTotalPledge: (value: number) => void;
  incrementTotalBackers: (value: number) => void;
};

const ProjectContext = React.createContext<ProjectContextType>({
  totalPledge: 0,
  maxPledge: 0,
  totalBackers: 0,
  daysLeft: 0,
  incrementTotalPledge: (value: number) => {},
  incrementTotalBackers: (value: number) => {},
});

export default ProjectContext;
