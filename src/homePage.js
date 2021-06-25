import { Box } from "@chakra-ui/react";
// import { useState } from "react";

import Heading from "./components/heading";
import Input from "./components/input";
import NotesList from "./components/notesList";

function Homepage() {
  return (
    <Box m="10">
      <Heading />
      <Input />
      <NotesList />
    </Box>
  );
}

export default Homepage;
