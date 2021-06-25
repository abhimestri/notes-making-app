import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Heading from "./components/heading";
import Input from "./components/input";
import NotesList from "./components/notesList";
import { notesAction } from "./store/notes-slice";
import { useToast } from "@chakra-ui/react";
function Homepage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notesList);
  const [notesList, setNotesList] = useState([]);
  // const sortedAscending = useSelector((state) => state.sortedAscending);

  useEffect(() => {
    setNotesList(list);
  }, [list]);

  const handleSortAscNotesList = () => {
    let sortedList = notesList.slice().sort((a, b) => {
      return notesList.indexOf(a) - notesList.indexOf(b);
    });
    dispatch(notesAction.sortManner(false));
    setNotesList(sortedList);
  };
  const handleSortDscNotesList = () => {
    let sortedList = notesList.slice().sort((a, b) => {
      return notesList.indexOf(b) - notesList.indexOf(a);
    });
    dispatch(notesAction.sortManner(true));
    setNotesList(sortedList);
  };

  const handelSearchNotesList = (value) => {
    if (notesList.length !== 0) {
      var searchedNote = list.filter((el) => {
        console.log(el.note, value);
        return el.note.toString().includes(value.toString());
      });
      if (searchedNote.length === 0) {
        setNotesList(list);
        toast({
          title: "Not found",
          description: "Your searched was not found! ",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setNotesList(searchedNote);
      }
    }
  };
  return (
    <Box m="10">
      <Heading SearchNotes={handelSearchNotesList} />
      <Input
        SortAscNotesList={handleSortAscNotesList}
        SortDscNotesList={handleSortDscNotesList}
      />
      <NotesList notesList={notesList} />
    </Box>
  );
}

export default Homepage;
