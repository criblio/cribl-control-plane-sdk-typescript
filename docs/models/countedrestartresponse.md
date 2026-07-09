# CountedRestartResponse

## Example Usage

```typescript
import { CountedRestartResponse } from "cribl-control-plane/models";

let value: CountedRestartResponse = {
  count: 414718,
  items: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | number of items present in the items array               |
| `items`                                                  | [models.RestartResponse](../models/restartresponse.md)[] | :heavy_check_mark:                                       | List of items in this response.                          |