import { Box, Heading, Button } from '@chakra-ui/react';

const Header = ({ user, onLogout }) => (
  <Box h={36} bgColor="purple.200" p={4}>
    <Heading>Header</Heading>
    {user && (
      <Button onClick={onLogout} mt={2} colorScheme="red">
        Logout
      </Button>
    )}
  </Box>
);

export default Header;
