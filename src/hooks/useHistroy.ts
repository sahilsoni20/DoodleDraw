import { useState } from "react";
import { ElementType } from "../types";

export const useHistroy = (initialState: ElementType[]) => {
  const [index, setIndex] = useState(0);
  const [histroy, setHistroy] = useState([initialState]);

  const setState = (
    action: ElementType[] | ((current: ElementType[]) => ElementType[]),
    overwrite = false
  ) => {
    const newState =
      typeof action === "function" ? action(histroy[index]) : action;
    if (overwrite) {
      const histroyCopy = [...histroy];
      histroyCopy[index] = newState;
      setHistroy(histroyCopy);
    } else {
      const updatedState = [...histroy].slice(0, index + 1);
      setHistroy([...updatedState, newState]);
      setIndex((prevState) => prevState + 1);
    }
  };

  const undo = () => index > 0 && setIndex((prevState) => prevState - 1);
  const redo = () => index > 0 && setIndex((prevState) => prevState + 1);

  return {
    elements: histroy[index],
    setElements: setState,
    undo,
    redo,
  };
};
