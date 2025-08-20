# CreateInputHecTokenByIdRequest

## Example Usage

```typescript
import { CreateInputHecTokenByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateInputHecTokenByIdRequest = {
  id: "<id>",
  addHecTokenRequest: {
    description: "atop however snuggle convoke incidentally lest versus",
    enabled: false,
    metadata: [
      {
        name: "<value>",
        value: "<value>",
      },
    ],
    token: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | The <code>id</code> of the Splunk HEC Source.                   |
| `addHecTokenRequest`                                            | [models.AddHecTokenRequest](../../models/addhectokenrequest.md) | :heavy_check_mark:                                              | AddHecTokenRequest object                                       |