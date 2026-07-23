# CountedConfigGroup

## Example Usage

```typescript
import { CountedConfigGroup } from "cribl-control-plane/models";

let value: CountedConfigGroup = {
  count: 458945,
  items: [],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `count`                                          | *number*                                         | :heavy_check_mark:                               | number of items present in the items array       |
| `items`                                          | [models.ConfigGroup](../models/configgroup.md)[] | :heavy_check_mark:                               | List of items in this response.                  |