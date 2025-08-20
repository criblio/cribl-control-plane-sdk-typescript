# GetVersionStatusRequest

## Example Usage

```typescript
import { GetVersionStatusRequest } from "cribl-control-plane/models/operations";

let value: GetVersionStatusRequest = {
  group: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `group`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The <code>id</code> of the Worker Group or Edge Fleet to get the status for. |