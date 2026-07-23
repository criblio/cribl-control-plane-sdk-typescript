# CountedPackInstallInfo

## Example Usage

```typescript
import { CountedPackInstallInfo } from "cribl-control-plane/models";

let value: CountedPackInstallInfo = {
  count: 60955,
  items: [
    {
      id: "<id>",
      source: "<value>",
      tags: {
        domain: [
          "security",
          "observability",
        ],
        technology: [
          "aws",
          "splunk",
        ],
      },
      version: "1.0.0",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | number of items present in the items array               |
| `items`                                                  | [models.PackInstallInfo](../models/packinstallinfo.md)[] | :heavy_check_mark:                                       | List of items in this response.                          |