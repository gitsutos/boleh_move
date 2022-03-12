import { Button, Center, Modal } from "native-base";
import React, { useState } from "react";
const PopOver = ({ navigation, isOpen, onClose }) => {
  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                colorScheme="blueGray"
                onPress={() => {
                  navigation.replace("NewNeeded");
                }}
              >
                passenger
              </Button>
              <Button
                onPress={() => {
                  navigation.replace("NewRider");
                }}
              >
                rider
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
export default PopOver;
