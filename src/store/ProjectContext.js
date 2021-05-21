/** React core **/
import React from 'react';

const ProjectContext = React.createContext({
  totalPledge: 0,
  maxPledge: 0,
  totalBackers: 0,
  daysLeft: 0,
  incrementTotalPledge: value => {},
  incrementTotalBackers: value => {}
});

export default ProjectContext;
