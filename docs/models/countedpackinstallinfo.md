# CountedPackInstallInfo

## Example Usage

```typescript
import { CountedPackInstallInfo } from "cribl-control-plane/models";

let value: CountedPackInstallInfo = {
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
| `count`                                                  | *number*                                                 | :heavy_minus_sign:                                       | number of items present in the items array               |
| `items`                                                  | [models.PackInstallInfo](../models/packinstallinfo.md)[] | :heavy_minus_sign:                                       | List of items in this response.                          |