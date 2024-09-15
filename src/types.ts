export type ElementType = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: ToolsType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roughElement?: any;
  offsetX?: number;
  offsetY?: number;
  position: string | null;
  points?: { x: number; y: number }[];
  text?: string;
};

export interface ExtendedElementType extends ElementType {
  xoffsets?: number[];
  yoffsets?: number[];
}

export type SelectedElementType = ElementType & {
  xoffsets?: number[];
  yoffsets?: number[];
  offsetX?: number;
  offsetY?: number;
};

export type ActionsType =
  | "writing"
  | "drawing"
  | "moving"
  | "panning"
  | "resizing"
  | "none";

export const Tools = {
  pan: "pan",
  selection: "selection",
  rectangle: "rectangle",
  line: "line",
  pencil: "pencil",
  text: "text",
};

export type ToolsType = (typeof Tools)[keyof typeof Tools];

export type PointType = { x: number; y: number };
