import { Box } from '@chakra-ui/react';

const FancyBorder = ({ children, color }) => (
  <Box border="1px" borderRadius="md" borderColor={`${color}.400`} p={4}>
    {children}
  </Box>
);

export default FancyBorder;
