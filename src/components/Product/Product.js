import { Grid } from '@chakra-ui/react'
import { getDocs,collection } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { db } from '../../config'
import CardProduct from './Card'

const Product = () => {
  const {posts} = useContext(UserContext)
  
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={3.5}>
      {posts.length > 0 ? posts.map(item=>(
        <CardProduct item={item} />
      )) :<div className='ring'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div> }
    </Grid>
  )
}

export default Product
