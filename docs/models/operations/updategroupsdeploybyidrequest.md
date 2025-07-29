# UpdateGroupsDeployByIdRequest

## Example Usage

```typescript
import { UpdateGroupsDeployByIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateGroupsDeployByIdRequest = {
  id: "<id>",
  deployRequest: {
    version: "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | Group ID                                              |
| `deployRequest`                                       | [models.DeployRequest](../../models/deployrequest.md) | :heavy_check_mark:                                    | DeployRequest object                                  |