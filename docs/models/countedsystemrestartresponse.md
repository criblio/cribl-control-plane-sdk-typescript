# CountedSystemRestartResponse

## Example Usage

```typescript
import { CountedSystemRestartResponse } from "cribl-control-plane/models";

let value: CountedSystemRestartResponse = {
  count: 228648,
  items: [
    {
      restart: true,
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `count`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | number of items present in the items array                           |
| `items`                                                              | [models.SystemRestartResponse](../models/systemrestartresponse.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |