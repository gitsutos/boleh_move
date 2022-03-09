import React from "react";
import {
  Alert,
  VStack,
  HStack,
  Stack,
  Text,
  Center,
} from "native-base";
import PropTypes from "prop-types";

export default function AlertBox({ children, status }) {
  return (
    <Center>
      <Stack w="100%" maxW="350">
        <Alert w="100%" status={status}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {children}
                </Text>
              </HStack>
            </HStack>
          </VStack>
        </Alert>
      </Stack>
    </Center>
  );
}
AlertBox.propTypes = {
  status: PropTypes.oneOf([
    "success",
    "error",
    "warning",
    "primary",
    "info",
    "secondary"
  ]).isRequired,
};
