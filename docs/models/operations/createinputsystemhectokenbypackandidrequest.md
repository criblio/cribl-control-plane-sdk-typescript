# CreateInputSystemHecTokenByPackAndIdRequest

## Example Usage

```typescript
import { CreateInputSystemHecTokenByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: CreateInputSystemHecTokenByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  addHecTokenRequest: {
    token: "<value>",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | The <code>id</code> of the Splunk HEC Source.                   |
| `pack`                                                          | *string*                                                        | :heavy_check_mark:                                              | The <code>id</code> of the Pack to create.                      |
| `addHecTokenRequest`                                            | [models.AddHecTokenRequest](../../models/addhectokenrequest.md) | :heavy_check_mark:                                              | AddHecTokenRequest object                                       |