import {
  IStackItemStyles,
  IStackTokens,
} from "@fluentui/react";

export const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "center",
    display: "flex",
    height: 42,
    justifyContent: "left",
  },
};

// Tokens definition
export const stackTokens: IStackTokens = {
  childrenGap: 4,
  padding: 4,
};
