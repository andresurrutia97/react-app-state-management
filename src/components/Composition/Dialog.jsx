import { Text } from '@chakra-ui/react';

import FancyBorder from './FancyBorder';

const Dialog = ({ children, title, message }) => (
  <FancyBorder color="blue">
    <Text fontSize={18} fontWeight="bold" color="blue.500">
      {title}
    </Text>
    <Text mb={2}>{message}</Text>
    {children}
  </FancyBorder>
);

export default Dialog;
