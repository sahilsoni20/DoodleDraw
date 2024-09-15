import { ElementType, Tools, ToolsType } from "../types";
import rough from "roughjs";

export const createElement = (
  id: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: ToolsType
): ElementType => {
  const generator = rough.generator();

  switch (type) {
    case Tools.line:
    case Tools.rectangle: {
      const roughElement =
        type === Tools.line
          ? generator.line(x1, x2, y1, y2)
          : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
      return { id, x1, y1, x2, y2, type, roughElement, position: "" };
    }
    case Tools.pencile: {
      const defaultRoughElement = null;
      return {
        id,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        type,
        points: [{ x: x1, y: y1 }],
        roughElement: defaultRoughElement,
        position: ""
      };
    }
    case Tools.text: 
        return {id, type, x1, y1, x2, y2, text: "", position: ""}
    default: 
        throw new Error(`Type not recognized ${type}`) 
  }
};
