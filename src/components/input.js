import { Button, Flex, Input, Spacer } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { notesAction } from "../store/notes-slice";
import { useDispatch } from "react-redux";

function InputNote() {
  const inputNote = useRef();
  const dispatch = useDispatch();
  //   console.log([
  //     ...new Date(new Date())
  //       .toLocaleString()
  //       .toString()
  //       .split(",")[0]
  //       .split("/"),
  //   ]);
  const handelInput = () => {
    const noteObj = {
      note: inputNote.current.value,
      dateCreated: new Date(new Date()).toLocaleString(),
      id: Math.random(),
    };
    dispatch(notesAction.addNote(noteObj));
    inputNote.current.value = "";
  };

  return (
    <Flex>
      <Input
        ref={inputNote}
        ml="10"
        w="2xl"
        type="text"
        placeholder="Enter note to make..."
        mr="2"
      />
      <Spacer />
      <Button
        onClick={handelInput}
        colorScheme="teal"
        w="40"
        leftIcon={<AddIcon />}
        variant="outline"
        mr="2"
      >
        Add
      </Button>
      <Button mr="4" colorScheme="teal" w="40" variant="outline">
        Sort
      </Button>
    </Flex>
  );
}

export default InputNote;
