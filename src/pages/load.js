import { Button, Stack, Typography } from "@mui/joy";
import {
  useRive,
  EventType,
  RiveEventType,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useState, useEffect } from "react";

const Home = () => {
  const { rive, RiveComponent } = useRive({
    src: "load-api.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const [loadingState, setLoadingState] = useState("Waiting");

  const riveState = useStateMachineInput(rive, "State Machine 1", "state");

  const handleSimulateAPI = () => {
    handleStateToLoading();
    setTimeout(handleStateToSuccess, 3000);
  };

  const handleStateToWaiting = () => {
    riveState.runtimeInput.value = 0;
    setLoadingState("Waiting");
  };
  const handleStateToLoading = () => {
    riveState.runtimeInput.value = 1;
    setLoadingState("Loading");
  };
  const handleStateToSuccess = () => {
    riveState.runtimeInput.value = 2;
    setLoadingState("Success");
  };

  return (
    <>
      <Stack spacing={2}>
        <RiveComponent style={{ height: "400px" }} />
        <Typography textAlign="center">{loadingState}</Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          direction="row"
        >
          <Button onClick={handleSimulateAPI}>GO API</Button>
          <Button variant="soft" onClick={handleStateToWaiting}>
            RESET
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
