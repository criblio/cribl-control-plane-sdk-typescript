# DeleteConfigGroupByProductAndIdResponse

a list of ConfigGroup objects

## Example Usage

```typescript
import { DeleteConfigGroupByProductAndIdResponse } from "cribl-control-plane/models/operations";

let value: DeleteConfigGroupByProductAndIdResponse = {
  count: 834480,
  items: [
    {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 4577.19,
      description: "woot and acidly puny curl smoke pfft ew qua",
      estimatedIngestRate: 13312,
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
      incompatibleWorkerCount: 7468.88,
      inherits: "<value>",
      isFleet: true,
      isSearch: false,
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
      workerCount: 9768.27,
      workerRemoteAccess: false,
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `count`                                             | *number*                                            | :heavy_minus_sign:                                  | number of items present in the items array          |
| `items`                                             | [models.ConfigGroup](../../models/configgroup.md)[] | :heavy_minus_sign:                                  | N/A                                                 |