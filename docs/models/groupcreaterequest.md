# GroupCreateRequest

## Example Usage

```typescript
import { GroupCreateRequest } from "cribl-control-plane/models";

let value: GroupCreateRequest = {
  cloud: {
    provider: "azure",
    region: "<value>",
  },
  deployingWorkerCount: 9605.52,
  description:
    "gosh continually bestride trusting merrily whoa whether gifted even deliberately",
  estimatedIngestRate: 5120,
  git: {
    commit: "<value>",
    localChanges: 5624.35,
    log: [
      {
        author_email: "<value>",
        author_name: "<value>",
        date: "2024-12-12",
        hash: "<value>",
        message: "<value>",
        short: "<value>",
      },
    ],
  },
  id: "<id>",
  incompatibleWorkerCount: 9063.01,
  inherits: "<value>",
  isFleet: false,
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
  sourceGroupId: "<id>",
  streamtags: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  tags: "<value>",
  type: "lake_access",
  upgradeVersion: "<value>",
  workerCount: 2070.7,
  workerRemoteAccess: false,
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cloud`                                                                                                                                                   | [models.ConfigGroupCloud](../models/configgroupcloud.md)                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `deployingWorkerCount`                                                                                                                                    | *number*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `description`                                                                                                                                             | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `estimatedIngestRate`                                                                                                                                     | [models.GroupCreateRequestEstimatedIngestRate](../models/groupcreaterequestestimatedingestrate.md)                                                        | :heavy_minus_sign:                                                                                                                                        | Maximum expected volume of data ingested by the @{group}. (This setting is available only on @{group}s consisting of Cribl-managed Cribl.Cloud @{node}s.) |
| `git`                                                                                                                                                     | [models.GroupCreateRequestGit](../models/groupcreaterequestgit.md)                                                                                        | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `id`                                                                                                                                                      | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | N/A                                                                                                                                                       |
| `incompatibleWorkerCount`                                                                                                                                 | *number*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `inherits`                                                                                                                                                | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `isFleet`                                                                                                                                                 | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `isSearch`                                                                                                                                                | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `lookupDeployments`                                                                                                                                       | [models.ConfigGroupLookups](../models/configgrouplookups.md)[]                                                                                            | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `maxWorkerAge`                                                                                                                                            | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `name`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `onPrem`                                                                                                                                                  | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `provisioned`                                                                                                                                             | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `sourceGroupId`                                                                                                                                           | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `streamtags`                                                                                                                                              | *string*[]                                                                                                                                                | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `tags`                                                                                                                                                    | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `type`                                                                                                                                                    | [models.GroupCreateRequestType](../models/groupcreaterequesttype.md)                                                                                      | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `upgradeVersion`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `workerCount`                                                                                                                                             | *number*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |
| `workerRemoteAccess`                                                                                                                                      | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | N/A                                                                                                                                                       |