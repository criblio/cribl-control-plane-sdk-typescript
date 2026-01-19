# CreateOutputTestByIdRequest

## Example Usage

```typescript
import { CreateOutputTestByIdRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputTestByIdRequest = {
  id: "<id>",
  outputTestRequest: {
    events: [
      {
        "key": "<value>",
      },
      {
        "key": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Destination to send sample event data to. |
| `outputTestRequest`                                                  | [models.OutputTestRequest](../../models/outputtestrequest.md)        | :heavy_check_mark:                                                   | OutputTestRequest object                                             |