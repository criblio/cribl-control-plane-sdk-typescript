# UpdateWorkersRestartResponse

a list of RestartResponse objects

## Example Usage

```typescript
import { UpdateWorkersRestartResponse } from "cribl-control-plane/models/operations";

let value: UpdateWorkersRestartResponse = {
  count: 901807,
  items: [
    {
      id: "<id>",
      message: "<value>",
      status: "Error",
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `count`                                                     | *number*                                                    | :heavy_minus_sign:                                          | number of items present in the items array                  |
| `items`                                                     | [models.RestartResponse](../../models/restartresponse.md)[] | :heavy_minus_sign:                                          | N/A                                                         |