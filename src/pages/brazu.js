import { Stack } from "@mui/joy";
import { useRive } from "@rive-app/react-canvas";

const Home = () => {
  const { RiveComponent } = useRive({
    src: "brazu.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <Stack spacing={2}>
      <RiveComponent style={{ height: "400px" }} />
    </Stack>
  );
};

export default Home;
