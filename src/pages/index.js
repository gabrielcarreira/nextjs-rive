import { Button, Stack, Typography } from "@mui/joy";
import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import { useState, useEffect } from "react";

const Home = () => {
  const { rive, RiveComponent } = useRive({
    src: "weather_widget.riv",
    stateMachines: "WeatherWidget",
    autoplay: true,
  });

  const handleChangeWeather = (value) => {
    const inputs = rive.stateMachineInputs("WeatherWidget");
    inputs[1].runtimeInput.value = value;
  };

  const handleChangeRatio = (value) => {
    const inputs = rive.stateMachineInputs("WeatherWidget");
    inputs[0].runtimeInput.value = value;
  };

  return (
    <>
      <Stack spacing={2}>
        <RiveComponent style={{ height: "400px" }} />
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button onClick={() => handleChangeWeather(1)}>Sun</Button>
          <Button onClick={() => handleChangeWeather(2)}>Snow</Button>
          <Button onClick={() => handleChangeWeather(3)}>Rain</Button>
          <Button onClick={() => handleChangeWeather(4)}>Storm</Button>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button onClick={() => handleChangeRatio(1)}>Standard</Button>
          <Button onClick={() => handleChangeRatio(2)}>Wide</Button>
          <Button onClick={() => handleChangeRatio(3)}>Portrait</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
