// import React, { useContext } from 'react';
import { Text } from '@chakra-ui/react';

// import { Context } from '../../pages/ContextUsage';

const WelcomeMessage = ({ user }) => {
  // const WelcomeMessage = () => {

  // const { user } = useContext(Context);

  return (
    <Text>
      Welcome{' '}
      <Text as="span" fontWeight="bold">
        {user.name}
      </Text>
      !!!
    </Text>
  );
};

export default WelcomeMessage;
