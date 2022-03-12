import React, { useEffect, useState } from "react";

import {
  Button,
  Center,
  CheckIcon,
  FormControl,
  Input,
  Select,
} from "native-base";

import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { CREATE_PASSENGER } from "../../store/actions/passanger.actions";

const NewPassenger = ({ navigation }) => {
  let [passengerType, setPassengerType] = useState("");
  let [IDNo, setIDNo] = useState("");
  let [Loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = () => {
    setLoading(true);
    dispatch(CREATE_PASSENGER({ passengerType: passengerType, id_no: IDNo }));
    setLoading(false);
    navigation.replace("HomeNavigation");
  };
  return (
    <Center style={css.container}>
      <FormControl style={{ ...css.idInput }} isRequired>
        <FormControl.Label>Identification card number</FormControl.Label>
        <Input
          h={16}
          keyboardType="name-phone-pad"
          variant="outline"
          bgColor="#fff"
          placeholder="ID card number"
          value={IDNo}
          onChangeText={setIDNo}
        />
      </FormControl>
      <FormControl style={{ ...css.input }} isRequired>
        <FormControl.Label>I AM A</FormControl.Label>
        <Select
          h={16}
          selectedValue={passengerType}
          minWidth="200"
          bgColor="#fff"
          accessibilityLabel="Choose passenger type"
          placeholder="Choose passenger type"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setPassengerType(itemValue)}
        >
          <Select.Item label="Senior citizen" value="Senior citizen" />
          <Select.Item label="Blind" value="Blind" />
          <Select.Item label="Deaf" value="Deaf" />
          <Select.Item label="Handicapped" value="Handicapped" />
        </Select>
      </FormControl>
      <Button
        isLoading={Loading}
        onPress={handleRegister}
        variant="solid"
        colorScheme="warning"
        style={css.submitButton}
      >
        REGISTER
      </Button>
    </Center>
  );
};

const css = StyleSheet.create({
  submitButton: {
    marginTop: 30,
  },
  input: {
    marginVertical: 20,
  },
  idInput: {
    marginTop: 40,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default NewPassenger;
