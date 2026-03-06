# OutputTestResponse

## Example Usage

```typescript
import { OutputTestResponse } from "cribl-control-plane/models";

let value: OutputTestResponse = {
  outputId: "<id>",
  success: false,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `details`                                                                                                 | Record<string, *any*>                                                                                     | :heavy_minus_sign:                                                                                        | Additional details about the Destination test, such as per-event results and transport-level information. |
| `error`                                                                                                   | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Error message that describes a failed Destination test.                                                   |
| `outputId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The <code>id</code> of the Destination that was tested.                                                   |
| `success`                                                                                                 | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | If <code>true</code>, the Destination test succeeded. Otherwise, <code>false</code>.                      |
| `successDetail`                                                                                           | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Human-readable description for a successful Destination test result.                                      |