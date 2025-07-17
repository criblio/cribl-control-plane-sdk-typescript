# CreateInputHecTokenByIdRequest

## Example Usage

```typescript
import { CreateInputHecTokenByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateInputHecTokenByIdRequest = {
  id: "<id>",
  addHecTokenRequest: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | hec input id                                                    |
| `addHecTokenRequest`                                            | [models.AddHecTokenRequest](../../models/addhectokenrequest.md) | :heavy_check_mark:                                              | AddHecTokenRequest object                                       |