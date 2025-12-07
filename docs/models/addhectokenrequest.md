# AddHecTokenRequest

## Example Usage

```typescript
import { AddHecTokenRequest } from "cribl-control-plane/models";

let value: AddHecTokenRequest = {
  description: "soupy zesty ack overstay amongst the",
  enabled: false,
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
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | N/A                                                                              |
| `metadata`                                                                       | [models.AddHecTokenRequestMetadatum](../models/addhectokenrequestmetadatum.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |
| `token`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |