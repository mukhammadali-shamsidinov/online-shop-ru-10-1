import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../../config';
export default function SimpleCard() {
  const {register,reset,handleSubmit} = useForm()
  const navigate = useNavigate()
  function submit(data){
    createUserWithEmailAndPassword(auth,data.email,data.password).then(response=>{
      Swal.fire({
        icon:'success',
        title:'successfull',
        showCloseButton:navigate('/home')
      })

    }).catch(err=>{
      Swal.fire({
        icon:'error',
        title:'error'
      })
    })
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign Up to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(submit)} >
       
            <FormControl id="email" >
              <FormLabel>Email address</FormLabel>
              <Input {...register('email')} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input {...register('password')} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
               
              </Stack>
              <Button type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign Up
              </Button>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}