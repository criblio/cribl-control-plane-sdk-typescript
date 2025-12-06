# AddHecTokenRequest

## Example Usage

```typescript
import { AddHecTokenRequest } from "cribl-control-plane/models";

let value: AddHecTokenRequest = {
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
  ],
  description: "velvety astonishing uh-huh rally along swanling a",
  enabled: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
  token: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `allowedIndexesAtToken`                                                          | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | [models.AddHecTokenRequestMetadatum](../models/addhectokenrequestmetadatum.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `token`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |