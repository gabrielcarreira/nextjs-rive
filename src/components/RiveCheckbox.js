import { useRive, EventType } from "@rive-app/react-canvas";
import { useEffect } from "react";

export const RiveCheckbox = ({ isChecked, onToogle }) => {
  const { rive, RiveComponent } = useRive({
    src: "checkbox.riv",
    artboard: "checkbox",
    stateMachines: "checkbox",
    autoplay: true,
  });

  const getCheckboxInput = () => {
    return rive.stateMachineInputs("checkbox")[0].runtimeInput;
  };

  const checkboxChecked = () => {
    const inputCheck = getCheckboxInput();
    inputCheck.value = true;
  };

  useEffect(() => {
    const onRiveEventReceived = () => {
      onToogle(getCheckboxInput().value);
    };

    if (!rive) return;
    rive.on(EventType.RiveEvent, onRiveEventReceived);
    if (isChecked) checkboxChecked();
  }, [rive]);

  return <RiveComponent style={{ height: "80px", backgroundColor: "#444" }} />;
};
