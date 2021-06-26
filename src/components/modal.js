import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { notesAction } from "../store/notes-slice";
import { useToast } from "@chakra-ui/react";

const EditModal = (props) => {
  const toast = useToast();
  const updateNoteRef = useRef();
  const dispatch = useDispatch();

  const saveInput = () => {
    if (!updateNoteRef.current.value) {
      toast({
        title: "Failed to edit",
        description: "Please enter a note",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    dispatch(
      notesAction.updateNote({
        id: props.value.id,
        updatedValue: updateNoteRef.current.value,
      })
    );
    toast({
      title: "Edited!",
      description: "note edited successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    props.onClose();
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Previous note : {props.value.note}</FormLabel>
            <Input ref={updateNoteRef} placeholder="Enter note to update" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={saveInput} mr={3}>
            Save
          </Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
