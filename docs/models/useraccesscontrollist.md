# UserAccessControlList

## Example Usage

```typescript
import { UserAccessControlList } from "cribl-control-plane/models";

let value: UserAccessControlList = {
  perms: [
    {
      gid: "<id>",
      id: "<id>",
      policy: "<value>",
      type: "dataset-providers",
    },
  ],
  user: "Brionna.Kuhic50",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `perms`                                                | [models.ResourcePolicy](../models/resourcepolicy.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `user`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |