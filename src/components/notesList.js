import { useSelector } from "react-redux";
import {
  Box,
  Button,
  Center,
  Flex,
  List,
  ListItem,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import Modal from "./modal";
import { notesAction } from "../store/notes-slice";
import { useDispatch } from "react-redux";
// import { notesAction } from "../store/notes-slice";

function NotesList(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const notesList = useSelector((state) => state.notesList);
  const [editValue, setEditValue] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(notesList);
  }, [notesList]);

  if (notesList.length === 0) {
    return (
      <Center m="10">
        <Text pb="10" fontFamily="revert" fontSize="32">
          No any notes
        </Text>
      </Center>
    );
  } else {
    return (
      <React.Fragment>
        <Modal isOpen={isOpen} onClose={onClose} value={editValue} />
        <List spacing={3} pb="10">
          {notesList.map((el) => {
            return (
              <ListItem bg="gray.50" m="5" h="1xl">
                <Flex>
                  <Box m="5" ml="12">
                    <Text fontSize="20">{el.note}</Text>
                    <Text fontSize={13}>{el.dateCreated}</Text>
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      pl="2"
                      onClick={() => {
                        setEditValue({
                          id: el.id,
                          dateCreated: new Date(new Date()).toLocaleString(),
                          note: el.note,
                        });
                        onOpen();
                      }}
                      rightIcon={<EditIcon />}
                      m="2"
                    />
                    <Button
                      pl="2"
                      onClick={() => dispatch(notesAction.deleteNote(el.id))}
                      rightIcon={<DeleteIcon />}
                      m="2"
                    />
                  </Box>
                </Flex>
              </ListItem>
            );
          })}
        </List>
      </React.Fragment>
    );
  }
}

export default NotesList;
