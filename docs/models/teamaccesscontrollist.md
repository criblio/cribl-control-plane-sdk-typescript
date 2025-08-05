# TeamAccessControlList

## Example Usage

```typescript
import { TeamAccessControlList } from "cribl-control-plane/models";

let value: TeamAccessControlList = {
  perms: [
    {
      gid: "<id>",
      id: "<id>",
      policy: "<value>",
      type: "dashboards",
    },
  ],
  team: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `perms`                                                | [models.ResourcePolicy](../models/resourcepolicy.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `team`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |