# CreateOutputTestByIdRequest

## Example Usage

```typescript
import { CreateOutputTestByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputTestByIdRequest = {
  id: "<id>",
  outputTestRequest: {
    events: [
      {
        raw: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | Destination Id                                                |
| `outputTestRequest`                                           | [models.OutputTestRequest](../../models/outputtestrequest.md) | :heavy_check_mark:                                            | OutputTestRequest object                                      |