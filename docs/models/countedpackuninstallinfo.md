# CountedPackUninstallInfo

## Example Usage

```typescript
import { CountedPackUninstallInfo } from "cribl-control-plane/models";

let value: CountedPackUninstallInfo = {
  count: 50114,
  items: [
    {
      id: "<id>",
      source: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `count`                                                      | *number*                                                     | :heavy_minus_sign:                                           | number of items present in the items array                   |
| `items`                                                      | [models.PackUninstallInfo](../models/packuninstallinfo.md)[] | :heavy_minus_sign:                                           | N/A                                                          |