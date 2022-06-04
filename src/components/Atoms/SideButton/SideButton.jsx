import './SideButton.scss';
import { Text, useColorModeValue } from '@chakra-ui/react';

export default function SideButton() {
  return (
    <Text
      as={'a'}
      size={'sm'}
      href="https://github.com/DunoLabs"
      title="This product is powered by DunoLabs"
      rel="noopener"
      target="_blank"
      className="powered-by"
      bg={useColorModeValue('gray.900', 'gray.100')}
      color={useColorModeValue('white', 'gray.900')}
    >
      DunoLabs{' '}
      <Text as="span" className="powered-by-text" ms={2}>
        📝
      </Text>
    </Text>
  );
}
