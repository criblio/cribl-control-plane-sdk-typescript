# CreateOutputSystemTestByPackAndIdRequest

## Example Usage

```typescript
import { CreateOutputSystemTestByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemTestByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
  outputTestRequest: {
    events: [
      {},
      {},
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Destination to send sample event data to. |
| `pack`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Pack to create.                           |
| `outputTestRequest`                                                  | [models.OutputTestRequest](../../models/outputtestrequest.md)        | :heavy_check_mark:                                                   | OutputTestRequest object                                             |