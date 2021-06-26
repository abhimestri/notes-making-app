import { Box, Button, Input, Spacer, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
function Heading(props) {
  const handleSearch = (e) => {
    props.SearchNotes(e.target.value);
  };
  return (
    <Box display={{ md: "flex" }}>
      <Text fontSize="38" pt="5" pl="10" pb="6" fontFamily="revert">
        Add Your Note
      </Text>
      <Spacer />
      <Box mb="10">
        <Menu>
          <MenuButton mr="4" as={Button} rightIcon={<ChevronDownIcon />}>
            Filters
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => props.weekFilter()}>Week</MenuItem>
            <MenuItem onClick={() => props.monthFilter()}>Month</MenuItem>
            <MenuItem onClick={() => props.yearFilter()}>Year</MenuItem>
          </MenuList>
        </Menu>
        <Input
          mt="7"
          w="full"
          onChange={handleSearch}
          placeholder="search for task"
        />
      </Box>
    </Box>
  );
}

export default Heading;
