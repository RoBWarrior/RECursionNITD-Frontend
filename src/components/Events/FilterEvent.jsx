import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const FilterEvent = ({
  setEventType,
  setSearchQuery,
  FilterSearchHandler,
  EventType,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      flexDirection="column" // Stack items vertically
      width={isMobile ? "35vw" : "20vw"} // Increase width slightly on mobile
      height="100vh"
      position="fixed"
      top="8vh"
      bg={"gray.700"}
      left="0"
      alignItems={"flex-start"} // Center align items on mobile
    >
      {/* Filter (All, classes, contests, events) */}
      <Box
        width="100%"
        bg="gray.700"
        padding="2em 1em"
        marginTop={"1em"}
        marginBottom={isMobile ? "1em" : "0"} // Add margin for spacing on mobile
        borderBottom={"solid #212121 2px"}
      >
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Input
            color="black"
            bg="white"
            mr={2}
            flex="1"
            placeholder="Search Events"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            onClick={FilterSearchHandler}
          />
        </Flex>
      </Box>

      <Box
        width="100%"
        bg="gray.700"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start" // Align items to the left
        justifyContent="space-evenly" // Space around items
      >
        <Button
          _hover={{
            background: "gray.800",
          }}
          p={2}
          marginLeft={"5%"}
          width={"95%"}
          borderRadius={"16px 0px 0px 16px"}
          textAlign="left"
          background={EventType === "All" ? "gray.800" : "gray.700"}
          onClick={() => {
            setEventType("All");
          }}
        >
          All Events
        </Button>

        <Button
          _hover={{
            background: "gray.800",
          }}
          p={2}
          marginLeft={"5%"}
          width={"95%"}
          borderRadius={"16px 0px 0px 16px"}
          textAlign="left"
          background={EventType === "Contest" ? "gray.800" : "gray.700"}
          onClick={() => {
            setEventType("Contest");
          }}
        >
          Contests
        </Button>

        <Button
          _hover={{
            background: "gray.800",
          }}
          p={2}
          marginLeft={"5%"}
          width={"95%"}
          borderRadius={"16px 0px 0px 16px"}
          textAlign="left"
          background={EventType === "Class" ? "gray.800" : "gray.700"}
          onClick={() => {
            setEventType("Class");
          }}
        >
          Classes
        </Button>

        <Button
          p={2}
          _hover={{
            background: "gray.800",
          }}
          marginLeft={"5%"}
          width={"95%"}
          borderRadius={"16px 0px 0px 16px"}
          textAlign="left"
          background={EventType === "Event" ? "gray.800" : "gray.700"}
          onClick={() => {
            setEventType("Event");
          }}
        >
          Events
        </Button>
      </Box>
    </Flex>
  );
};

export default FilterEvent;
