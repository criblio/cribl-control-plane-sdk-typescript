# CountedSystemRestartResponse

## Example Usage

```typescript
import { CountedSystemRestartResponse } from "cribl-control-plane/models";

let value: CountedSystemRestartResponse = {
  count: 228648,
  items: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_check_mark:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.SystemRestartResponse](../models/systemrestartresponse.md)[] | :heavy_check_mark:                                                   | List of items in this response.                                      |