import React from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Skeleton,
  Badge,
} from "@chakra-ui/react";

import { BiExpand } from "react-icons/bi";
const ProductCard = ({ product }) => {
  return (
    <Skeleton _hover={{ size: 1.5 }}>
      <Box
        _hover={{ transform: "scale(1.1)", transitionDuration: "0.5s" }}
        borderWidth="1px"
        overflow="hidden"
        p="4"
        shadow="md"
      >
        <Image />
        {product.stock < 5 ? (
          <Badge colorScheme="yellow">Only {product.stock} left</Badge>
        ) : product.stock < 1 ? (
          <Badge colorScheme="red"> Sold out</Badge>
        ) : (
          <Badge colorScheme="green">In Stock</Badge>
        )}

        {product.productNew && (
          <Badge ml="2" colorScheme="purple">
            New
          </Badge>
        )}
        <Text noOfLines={1} fontSize="xl" fontWeight="semibold" mt="2">
          {product.brand}
        </Text>
        <Text noOfLines={1} fontSize="md" color="grey.600">
          {product.subtitle}
        </Text>
        <Flex justify="space-between" alignItems="center" mt="2">
          <Badge colorScheme="cyan">{product.category}</Badge>
          <Text fontSize="xl" fontWeight="semibold" color="grey.600">
            {product.price}
          </Text>
        </Flex>
        <IconButton
          icon={<BiExpand size="20" />}
          colorScheme="cyan"
          size="sm"
        />
      </Box>
    </Skeleton>
  );
};

export default ProductCard;
