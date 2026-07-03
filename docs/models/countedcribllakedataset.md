# CountedCriblLakeDataset

## Example Usage

```typescript
import { CountedCriblLakeDataset } from "cribl-control-plane/models";

let value: CountedCriblLakeDataset = {
  count: 905702,
  items: [
    {
      id: "<id>",
      searchConfig: {
        metadata: {
          earliest: "-30d",
          enableAcceleration: false,
          fieldList: [
            "<value 1>",
          ],
          scanMode: "quick",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_check_mark:                                         | number of items present in the items array                 |
| `items`                                                    | [models.CriblLakeDataset](../models/cribllakedataset.md)[] | :heavy_check_mark:                                         | List of items in this response.                            |