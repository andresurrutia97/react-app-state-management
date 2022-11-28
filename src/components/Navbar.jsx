import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Flex, Text, Heading } from '@chakra-ui/react';

import { getIsDarkMode } from '../stores/darkMode';
import { routes } from '../routes';

import DarkModeSwitch from './DarkModeSwitch';

const Navbar = () => {
  const isDarkMode = useSelector((state) => getIsDarkMode(state));

  const activeColor = isDarkMode ? 'blue.300' : 'white';
  const inactiveColor = isDarkMode ? 'white' : 'blue.900';

  return (
    <Flex
      px={6}
      alignItems="center"
      justifyContent="space-between"
      h={16}
      bgColor={isDarkMode ? 'blue.700' : 'blue.400'}
      boxShadow="sm"
    >
      <Heading fontSize={20} color={isDarkMode ? 'white' : 'blue.900'}>
        App state management
      </Heading>

      <Flex dir="row" alignItems="center">
        <DarkModeSwitch />
        {routes[0].children.map(({ name, path }) => (
          <NavLink to={path} key={path}>
            {({ isActive }) => (
              <Text
                ml={4}
                cursor="pointer"
                color={isActive ? activeColor : inactiveColor}
              >
                {name}
              </Text>
            )}
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
