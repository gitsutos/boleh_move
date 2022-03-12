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
import { CREATE_RIDER } from "../../store/actions/rider.actions";

const NewRider = ({ navigation }) => {
  let [organization, setOrg] = useState("");
  let [IDNo, setIDNo] = useState("");
  let [Loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = () => {
    setLoading(true);
    dispatch(CREATE_RIDER({ organization: organization, id_no: IDNo }));
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
        <FormControl.Label>Organization</FormControl.Label>
        <Select
          h={16}
          selectedValue={organization}
          minWidth="200"
          bgColor="#fff"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setOrg(itemValue)}
        >
          <Select.Item
            label="National Council for Blind"
            value="National Council for Blind"
          />
          <Select.Item
            label="Malaysian Federation of the Deaf"
            value="Malaysian Federation of the Deaf"
          />
          <Select.Item
            label="Damai Disabled Person"
            value="Damai Disabled Person"
          />
          <Select.Item
            label="Independent Volunteer"
            value="Independent Volunteer"
          />
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

export default NewRider;
