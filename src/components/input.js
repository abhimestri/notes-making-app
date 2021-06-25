import { Button, Flex, Input, Spacer } from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { notesAction } from "../store/notes-slice";
import { useDispatch, useSelector } from "react-redux";

function InputNote(props) {
  const inputNote = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();
  const sortedAscending = useSelector((state) => state.sortedAscending);
  const [sortingOrd, setOrder] = useState();
  useEffect(() => {
    setOrder(sortedAscending);
  }, [sortedAscending]);
  const handelInput = () => {
    const noteObj = {
      note: inputNote.current.value,
      dateCreated: dateRef.current.value,
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
      <Input type="date" w="44" ref={dateRef} placeholder="Phone number" />
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
      <Button
        onClick={() => {
          sortedAscending ? props.SortDscNotesList() : props.SortAscNotesList();
        }}
        colorScheme="teal"
        w="40"
        as={Button}
        rightIcon={sortingOrd ? <ChevronDownIcon /> : <ChevronUpIcon />}
      >
        sort
      </Button>
    </Flex>
  );
}

export default InputNote;
