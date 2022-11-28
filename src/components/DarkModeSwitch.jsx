import { useSelector, useDispatch } from 'react-redux';
import { SunnyIcon, MoonIcon } from 'chakra-ui-ionicons';
import { Flex, Switch } from '@chakra-ui/react';

import { getIsDarkMode, toggleDarkMode } from '../stores/darkMode';

const DarkModeSwitch = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => getIsDarkMode(state));

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!isDarkMode));
  };

  return (
    <Flex alignItems="center">
      {isDarkMode ? (
        <SunnyIcon mr={2} color="white" />
      ) : (
        <MoonIcon mr={2} color="blue.900" />
      )}
      <Switch onChange={handleToggleDarkMode} colorScheme="green" />
    </Flex>
  );
};

export default DarkModeSwitch;
