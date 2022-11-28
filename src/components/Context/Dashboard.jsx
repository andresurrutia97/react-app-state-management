import { Box, Heading } from '@chakra-ui/react';

import DashboardNav from './DashboardNav';
import DashboardContent from './DashboardContent';

const Dashboard = ({ user, onLogout }) => {
  // const Dashboard = ({ onLogout }) => {
  return (
    <Box>
      <Heading>The Dashboard</Heading>
      <DashboardNav />
      {/* <DashboardContent /> */}
      <DashboardContent user={user} />
    </Box>
  );
};

// Composition
// const Dashboard = ({ children, onLogout }) => (
//   <Box>
//     <Heading>The Dashboard</Heading>
//     {children}
//   </Box>
// );

export default Dashboard;
