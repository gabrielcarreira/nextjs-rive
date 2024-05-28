import { Button, Stack, Typography } from "@mui/joy";
import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import { useState, useEffect } from "react";

const Home = () => {
  const { rive, RiveComponent } = useRive({
    src: "brazu.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <>
      <Stack spacing={2}>
        <RiveComponent style={{ height: "400px" }} />
      </Stack>
    </>
  );
};

export default Home;
