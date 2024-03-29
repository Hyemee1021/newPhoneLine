import { Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {products.length > 1 && (
        <Box>
          <Wrap
            spacing="30px"
            justify="center"
            minHeight="100vh"
            mx={{ base: "!2", md: "20", lg: "32" }}
          >
            {products.map((product) => (
              <WrapItem key={product._id}>
                <Center w="250px" h="450px">
                  <ProductCard product={product} loading={loading} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default ProductsScreen;
