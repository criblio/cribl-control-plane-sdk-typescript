# GetVersionCountResponse

a list of GitCountResult objects

## Example Usage

```typescript
import { GetVersionCountResponse } from "cribl-control-plane/models/operations";

let value: GetVersionCountResponse = {
  count: 285473,
  items: [
    {
      count: 5041.25,
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `count`                                                   | *number*                                                  | :heavy_minus_sign:                                        | number of items present in the items array                |
| `items`                                                   | [models.GitCountResult](../../models/gitcountresult.md)[] | :heavy_minus_sign:                                        | N/A                                                       |