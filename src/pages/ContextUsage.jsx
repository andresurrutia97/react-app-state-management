import React, { useState, createContext } from 'react';
import { Box } from '@chakra-ui/react';

import Title from '../components/Title';
import Header from '../components/Context/Header';
import Footer from '../components/Context/Footer';
import Dashboard from '../components/Context/Dashboard';
import DashboardContent from '../components/Context/DashboardContent';
import DashboardNav from '../components/Context/DashboardNav';
import WelcomeMessage from '../components/Context/WelcomeMessage';
import Login from '../components/Context/Login';

const ContextUsage = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <Title>Context Vs Composition</Title>
      <Header user={user} onLogout={() => setUser(null)} />
      <Box h="sm" bgColor="green.50" p={4}>
        {user ? (
          <Dashboard user={user} />
        ) : (
          <Login onLogin={() => setUser({ name: 'Andres' })} />
        )}
      </Box>
      <Footer />
    </>
  );
};

// Context API
// export const Context = createContext();

// const ContextUsage = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <Context.Provider value={{ user }}>
//       <Title>Context Vs Composition</Title>
//       <Header user={user} onLogout={() => setUser(null)} />
//       <Box h="sm" bgColor="green.50" p={4}>
//         {user ? (
//           <Dashboard />
//         ) : (
//           <Login onLogin={() => setUser({ name: 'Andres' })} />
//         )}
//       </Box>
//       <Footer />
//     </Context.Provider>
//   );
// };

// Composition
// const ContextUsage = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <>
//       <Title>Context</Title>
//       <Header user={user} onLogout={() => setUser(null)} />
//       <Box h="sm" bgColor="green.50" p={4}>
//         {user ? (
//           <Dashboard>
//             <DashboardNav />
//             <DashboardContent>
//               <WelcomeMessage user={user} />
//             </DashboardContent>
//           </Dashboard>
//         ) : (
//           <Login onLogin={() => setUser({ name: 'Andres' })} />
//         )}
//       </Box>
//       <Footer />
//     </>
//   );
// };

export default ContextUsage;
