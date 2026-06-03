# CountedCriblLakeDataset

## Example Usage

```typescript
import { CountedCriblLakeDataset } from "cribl-control-plane/models";

let value: CountedCriblLakeDataset = {
  items: [
    {
      id: "<id>",
      searchConfig: {
        metadata: {
          earliest: "-30d",
          enableAcceleration: true,
          fieldList: [
            "<value 1>",
            "<value 2>",
            "<value 3>",
          ],
          scanMode: "detailed",
        },
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *number*                                                   | :heavy_minus_sign:                                         | number of items present in the items array                 |
| `items`                                                    | [models.CriblLakeDataset](../models/cribllakedataset.md)[] | :heavy_minus_sign:                                         | List of items in this response.                            |