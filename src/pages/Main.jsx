import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flex, Box } from '@chakra-ui/react';

import { getIsDarkMode } from '../stores/darkMode';

import Navbar from '../components/Navbar';

const Main = () => {
  const isDarkMode = useSelector((state) => getIsDarkMode(state));

  return (
    <Box h="100vh" bgColor={isDarkMode ? 'gray.700' : 'gray.50'}>
      <Navbar />
      <Flex width="full" maxWidth="6xl" mx="auto" px={6} py={10}>
        <Box
          bgColor="gray.50"
          borderRadius="xl"
          px={6}
          py={8}
          w="full"
          boxShadow="md"
        >
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;
