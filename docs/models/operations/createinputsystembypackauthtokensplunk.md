# CreateInputSystemByPackAuthTokenSplunk

## Example Usage

```typescript
import { CreateInputSystemByPackAuthTokenSplunk } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackAuthTokenSplunk = {
  token: "<value>",
  description:
    "huzzah video whenever woot provided although honored christen toward onto",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `token`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is permitted. |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |