import React, { useState } from 'react';
import { Flex, Input, Button, Text } from '@chakra-ui/react';

import Dialog from './Dialog';
import FancyBorder from './FancyBorder';

const SignUpDialog = () => {
  const [name, setName] = useState('');

  const handleSignUp = () => alert(`Welcome aboard, ${name}!`);

  return (
    <Dialog title="This is Moove-it" message="How should we refer to you?">
      <Flex mb={6}>
        <Input
          w="xs"
          mr={2}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          w="fit-content"
          colorScheme="blue"
          onClick={handleSignUp}
          disabled={!name}
        >
          Sign me upppp!
        </Button>
      </Flex>
      <FancyBorder color="orange">
        <Text color="orange.500" mb={2}>
          Warning, this is the best company!!!
        </Text>
        <Text fontSize={12} color="gray.400">
          And we have tequila, but don't tell anyone :D
        </Text>
      </FancyBorder>
    </Dialog>
  );
};

export default SignUpDialog;
