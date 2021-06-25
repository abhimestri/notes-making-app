import { Box, Button, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
function Heading(props) {
  const handleSearch = (e) => {
    props.SearchNotes(e.target.value);
  };
  return (
    <Flex>
      <Text fontSize="38" w="3xl" pt="5" pl="10" pb="6" fontFamily="revert">
        Add Your Note
      </Text>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton mr="4" as={Button} rightIcon={<ChevronDownIcon />}>
            Filters
          </MenuButton>
          <MenuList>
            <MenuItem>Week</MenuItem>
            <MenuItem>Month</MenuItem>
            <MenuItem>Year</MenuItem>
          </MenuList>
        </Menu>
        <Input
          mt="7"
          w="96"
          onChange={handleSearch}
          placeholder="search for task"
        />
      </Box>
    </Flex>
  );
}

export default Heading;
