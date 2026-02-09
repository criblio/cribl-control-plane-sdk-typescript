# TeamAccessControlList

## Example Usage

```typescript
import { TeamAccessControlList } from "cribl-control-plane/models";

let value: TeamAccessControlList = {
  perms: [
    {
      gid: "<id>",
      policy: "<value>",
      type: "groups",
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