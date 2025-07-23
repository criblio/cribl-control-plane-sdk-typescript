# ConfigGroup

## Example Usage

```typescript
import { ConfigGroup } from "cribl-control-plane/models";

let value: ConfigGroup = {
  configVersion: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `cloud`                                                        | [models.ConfigGroupCloud](../models/configgroupcloud.md)       | :heavy_minus_sign:                                             | N/A                                                            |
| `configVersion`                                                | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `deployingWorkerCount`                                         | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `estimatedIngestRate`                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `git`                                                          | [models.Git](../models/git.md)                                 | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `incompatibleWorkerCount`                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `inherits`                                                     | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `isFleet`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `isSearch`                                                     | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `lookupDeployments`                                            | [models.ConfigGroupLookups](../models/configgrouplookups.md)[] | :heavy_minus_sign:                                             | N/A                                                            |
| `maxWorkerAge`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `onPrem`                                                       | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `provisioned`                                                  | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `streamtags`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `tags`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `type`                                                         | [models.ConfigGroupType](../models/configgrouptype.md)         | :heavy_minus_sign:                                             | N/A                                                            |
| `upgradeVersion`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `workerCount`                                                  | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `workerRemoteAccess`                                           | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |