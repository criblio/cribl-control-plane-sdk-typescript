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
| `count`                                                      | *number*                                                     | :heavy_check_mark:                                           | number of items present in the items array                   |
| `items`                                                      | [models.PackUninstallInfo](../models/packuninstallinfo.md)[] | :heavy_check_mark:                                           | List of items in this response.                              |