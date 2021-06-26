import { Button, Box, Input, Spacer } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { notesAction } from "../store/notes-slice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

function InputNote(props) {
  const toast = useToast();
  const inputNote = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();
  const sortedAscending = useSelector((state) => state.sortedAscending);
  const [sortingOrd, setOrder] = useState();
  useEffect(() => {
    setOrder(sortedAscending);
  }, [sortedAscending]);

  const handelInput = () => {
    if (!inputNote.current.value) {
      toast({
        title: "Failed to add",
        description: "Please add a note!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (!dateRef.current.value) {
      toast({
        title: "Failed to add",
        description: "Date not choosen",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const noteObj = {
      note: inputNote.current.value,
      dateCreated: dateRef.current.value,
      id: Math.random(),
    };
    dispatch(notesAction.addNote(noteObj));
    inputNote.current.value = "";
    dateRef.current.value = "";
    toast({
      title: "Successfully added",
      description: "Note has been added",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box display={{ md: "flex" }}>
      <Box w="full" display={{ md: "flex" }}>
        <Input
          ref={inputNote}
          w={[300, 400, 600]}
          type="text"
          placeholder="Enter note to make..."
          mr="12"
          mb="5"
        />
        <Input
          type="date"
          ml={{ md: "5" }}
          w={[200, 300, 400]}
          ref={dateRef}
          mb="5"
        />
      </Box>
      <Spacer />
      <Button
        onClick={handelInput}
        colorScheme="teal"
        w="40"
        leftIcon={<AddIcon />}
        variant="outline"
        mr="2"
        mb="5"
      >
        Add
      </Button>
      <Button
        onClick={() => {
          sortedAscending ? props.SortDscNotesList() : props.SortAscNotesList();
        }}
        mb="5"
        colorScheme="teal"
        w="40"
        as={Button}
        rightIcon={sortingOrd ? <ChevronDownIcon /> : <ChevronUpIcon />}
      >
        sort
      </Button>
    </Box>
  );
}

export default InputNote;
