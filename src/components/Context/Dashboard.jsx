import { Box, Heading } from '@chakra-ui/react';

import DashboardNav from './DashboardNav';
import DashboardContent from './DashboardContent';

const Dashboard = ({ user, onLogout }) => {
  // const Dashboard = ({ onLogout }) => {
  return (
    <Box>
      <Heading>Welcome to Il Palazzo</Heading>
      <DashboardNav />
      {/* <DashboardContent /> */}
      <DashboardContent user={user} />
    </Box>
  );
};

// Composition
// const Dashboard = ({ children, onLogout }) => (
//   <Box>
//      <Heading>Welcome to Il Palazzo</Heading>
//     {children}
//   </Box>
// );

export default Dashboard;
