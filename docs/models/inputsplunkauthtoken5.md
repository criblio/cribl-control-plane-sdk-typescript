# InputSplunkAuthToken5

## Example Usage

```typescript
import { InputSplunkAuthToken5 } from "cribl-control-plane/models";

let value: InputSplunkAuthToken5 = {
  token: "<value>",
  description: "adult pivot gadzooks finally mmm overplay lest",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |