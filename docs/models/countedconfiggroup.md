# CountedConfigGroup

## Example Usage

```typescript
import { CountedConfigGroup } from "cribl-control-plane/models";

let value: CountedConfigGroup = {
  items: [
    {
      estimatedIngestRate: 4096,
      id: "<id>",
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `count`                                          | *number*                                         | :heavy_minus_sign:                               | number of items present in the items array       |
| `items`                                          | [models.ConfigGroup](../models/configgroup.md)[] | :heavy_minus_sign:                               | N/A                                              |