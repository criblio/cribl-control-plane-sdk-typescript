# InputSplunkAuthToken6

## Example Usage

```typescript
import { InputSplunkAuthToken6 } from "cribl-control-plane/models";

let value: InputSplunkAuthToken6 = {
  token: "<value>",
  description: "bah fluff split softly offensively from towards gadzooks",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |