import React from "react"
import { Box, Flex, Text, Button, Stack, PseudoBox } from "@chakra-ui/react"
import { CloseIcon, MenuIcon } from "@chakra-ui/icons"

const MenuItems = props => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <a href={to}>{children}</a>
    </Text>
  )
}

export default MenuItems
