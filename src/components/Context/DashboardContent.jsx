import { Text } from '@chakra-ui/react';

import WelcomeMessage from './WelcomeMessage';
import FancyBorder from '../../components/Composition/FancyBorder';

const DashboardContent = ({ user }) => (
  // const DashboardContent = () => (
  <FancyBorder color="purple">
    <Text fontSize={22} fontWeight="bold">
      Content
    </Text>
    <WelcomeMessage user={user} />
    {/* <WelcomeMessage /> */}
  </FancyBorder>
);

// Composition
// const DashboardContent = ({ children }) => (
//   <FancyBorder color="purple">
//     <Text fontSize={20} fontWeight="bold">
//       Content
//     </Text>
//     {children}
//   </FancyBorder>
// );

export default DashboardContent;
