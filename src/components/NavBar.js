import React, { useContext } from 'react';
import { Box, Text, Icon, Image } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';

const NavBar = () => {

    const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <Box>
        <Text>Menu</Text>
        <Text>Logo</Text>
        <Text>Cart</Text>
    </Box>
  )
}

export default NavBar