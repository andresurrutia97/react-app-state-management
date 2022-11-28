import { Heading, Button } from '@chakra-ui/react';

const Login = ({ onLogin }) => (
  <>
    <Heading mb={4}>Please Login</Heading>
    <Button colorScheme="green" onClick={onLogin}>
      Login
    </Button>
  </>
);

export default Login;
