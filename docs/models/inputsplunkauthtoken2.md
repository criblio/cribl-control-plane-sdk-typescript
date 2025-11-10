# InputSplunkAuthToken2

## Example Usage

```typescript
import { InputSplunkAuthToken2 } from "cribl-control-plane/models";

let value: InputSplunkAuthToken2 = {
  token: "<value>",
  description: "considering premier politely as",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |