import {
    Box,
    Flex,
    Text,
    IconButton,
    useBreakpointValue,
    useDisclosure,
   
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom';
  import {
    HamburgerIcon,
    CloseIcon,
    
  } from '@chakra-ui/icons';

function Navigation(){
    const { isOpen, onToggle } = useDisclosure();
return(
    <div>
  <Box>
  
      <Flex
       bgColor={"teal.600"}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            
          <Link to='/'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            >
            <Text color={"white"} fontWeight={"bold"}>
                Home
                </Text>
          </Link>
          
          <Box marginLeft={"3em"}>
          
          <Link to='/newtask'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            
            >
                <Text color={"white"} fontWeight={"bold"}>
                New Task
                </Text>
          </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  
    </div>
);

}
export default Navigation;