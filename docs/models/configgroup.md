# ConfigGroup

## Example Usage

```typescript
import { ConfigGroup } from "cribl-control-plane/models";

let value: ConfigGroup = {
  cloud: {
    provider: "aws",
    region: "<value>",
  },
  configVersion: "<value>",
  deployingWorkerCount: 8637.12,
  description: "toe grandiose on",
  estimatedIngestRate: 5282.1,
  git: {
    commit: "<value>",
    localChanges: 470.66,
    log: [
      {
        authorEmail: "<value>",
        authorName: "<value>",
        date: "2024-12-24",
        hash: "<value>",
        message: "<value>",
        short: "<value>",
      },
    ],
  },
  id: "<id>",
  incompatibleWorkerCount: 508.39,
  inherits: "<value>",
  isFleet: true,
  isSearch: true,
  lookupDeployments: [
    {
      context: "<value>",
      lookups: [
        {
          deployedVersion: "<value>",
          file: "<value>",
          version: "<value>",
        },
      ],
    },
  ],
  maxWorkerAge: "<value>",
  name: "<value>",
  onPrem: false,
  provisioned: true,
  streamtags: [
    "<value 1>",
  ],
  tags: "<value>",
  type: "lake_access",
  upgradeVersion: "<value>",
  workerCount: 6622.93,
  workerRemoteAccess: false,
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