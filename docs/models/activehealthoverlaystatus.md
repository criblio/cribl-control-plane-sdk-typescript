# ActiveHealthOverlayStatus

## Example Usage

```typescript
import { ActiveHealthOverlayStatus } from "cribl-control-plane/models";

let value: ActiveHealthOverlayStatus = {
  binaryVersion: "4.12.0",
  overlayId: "patch.0",
  state: "active",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `binaryVersion`                                            | *string*                                                   | :heavy_check_mark:                                         | Binary version targeted by the active overlay.             | 4.12.0                                                     |
| `overlayId`                                                | *string*                                                   | :heavy_check_mark:                                         | Active overlay identifier.                                 | **Example 1:** patch.0<br/>**Example 2:** sideload.a1b2c3d |
| `state`                                                    | *"active"*                                                 | :heavy_check_mark:                                         | Current overlay state.                                     | active                                                     |