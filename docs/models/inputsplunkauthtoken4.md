# InputSplunkAuthToken4

## Example Usage

```typescript
import { InputSplunkAuthToken4 } from "cribl-control-plane/models";

let value: InputSplunkAuthToken4 = {
  token: "<value>",
  description: "so schedule ha unto gymnast since closely tomb yum around",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |