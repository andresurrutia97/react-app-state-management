import { Heading } from '@chakra-ui/react';

const Title = ({ children }) => (
  <Heading fontSize={30} color="gray.700" mb={10}>
    {children}
  </Heading>
);

export default Title;
