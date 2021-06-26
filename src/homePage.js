import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Heading from "./components/heading";
import Input from "./components/input";
import NotesList from "./components/notesList";
import { notesAction } from "./store/notes-slice";
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
    setNotesList(sortedList);
    dispatch(notesAction.sortManner(true));
    toast({
      title: "Successfully sorted!",
      description: "old notes will be shown first",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  const handleSortDscNotesList = () => {
    let sortedList = notesList.slice().sort((a, b) => {
      return notesList.indexOf(b) - notesList.indexOf(a);
    });
    setNotesList(sortedList);
    dispatch(notesAction.sortManner(false));
    toast({
      title: "Successfully sorted!",
      description: "newest notes will be shown first",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handelSearchNotesList = (value) => {
    if (notesList.length !== 0) {
      var searchedNote = list.filter((el) => {
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

  const handleWeekFilter = () => {
    if (notesList.length !== 0) {
      var weekFilteredNotesList = list;
      weekFilteredNotesList = weekFilteredNotesList.slice().map((el) => {
        var options = { weekday: "long" };
        return Object.assign({}, el, {
          dateCreated: new Intl.DateTimeFormat("en-US", options).format(
            new Date(el.dateCreated)
          ),
        });
      });
      setNotesList(weekFilteredNotesList);
      toast({
        title: "Filter applied!",
        description: "Your week filter was applied successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleMonthFilter = () => {
    if (notesList.length !== 0) {
      var weekFilteredNotesList = list;
      weekFilteredNotesList = weekFilteredNotesList.slice().map((el) => {
        return Object.assign({}, el, {
          dateCreated: new Date(el.dateCreated).getMonth() + 1,
        });
      });
      setNotesList(weekFilteredNotesList);
      toast({
        title: "Filter applied!",
        description: "Your month filter was applied successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleYearFilter = () => {
    if (notesList.length !== 0) {
      var weekFilteredNotesList = list;
      weekFilteredNotesList = weekFilteredNotesList.slice().map((el) => {
        return Object.assign({}, el, {
          dateCreated: new Date(el.dateCreated).getFullYear(),
        });
      });
      setNotesList(weekFilteredNotesList);
      toast({
        title: "Filter applied!",
        description: "Your year filter was applied successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box m="10">
      <Heading
        SearchNotes={handelSearchNotesList}
        weekFilter={handleWeekFilter}
        monthFilter={handleMonthFilter}
        yearFilter={handleYearFilter}
      />
      <Input
        SortAscNotesList={handleSortAscNotesList}
        SortDscNotesList={handleSortDscNotesList}
      />
      <NotesList notesList={notesList} />
    </Box>
  );
}

export default Homepage;
