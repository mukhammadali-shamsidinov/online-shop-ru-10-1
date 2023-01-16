import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,ButtonGroup,Button,Text,Image,Stack,Heading,Divider, Tag } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const CardProduct = ({item}) => {
  return (
    <div>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={item.image}
      borderRadius='lg'
      w={'300'}
      h='300'
      objectFit='contain'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item.title}</Heading>
      <Text color='blue.600' fontSize='2xl'>
        <Tag>${item.price}</Tag>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={`/home/details/${item.id}`}>
      <Button variant='solid' colorScheme='blue'>
        Details
      </Button>
      </Link>

      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default CardProduct
