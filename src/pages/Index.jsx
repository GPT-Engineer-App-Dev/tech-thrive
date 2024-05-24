import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Stay connected with this stylish smartwatch",
    price: "$299",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Logic to handle search
    console.log("Searching for:", searchQuery);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <InputGroup maxW="300px">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">Welcome to ElectroShop</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="blue.800" color="white" p={4} mt={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;