import { useRive, EventType, RiveEventType } from "@rive-app/canvas";
import { useCallback, useEffect } from "react";

export const RiveEventButton = () => {
  const { rive, RiveComponent } = useRive({
    src: "angry_button.riv",
  });

  return <RiveComponent />;
};
