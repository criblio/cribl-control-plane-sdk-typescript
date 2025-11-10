# InputSplunkAuthToken3

## Example Usage

```typescript
import { InputSplunkAuthToken3 } from "cribl-control-plane/models";

let value: InputSplunkAuthToken3 = {
  token: "<value>",
  description:
    "ownership even phooey drag majestic while phooey boss willfully rectangular",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |