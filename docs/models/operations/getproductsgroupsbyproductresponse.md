# GetProductsGroupsByProductResponse

a list of ConfigGroup objects

## Example Usage

```typescript
import { GetProductsGroupsByProductResponse } from "cribl-control-plane/models/operations";

let value: GetProductsGroupsByProductResponse = {
  count: 683708,
  items: [
    {
      cloud: {
        provider: "aws",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 850.55,
      description: "disarm physical before reluctantly till ha",
      estimatedIngestRate: 9183.57,
      git: {
        commit: "<value>",
        localChanges: 5529.58,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-11-14",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 4979.59,
      inherits: "<value>",
      isFleet: true,
      isSearch: false,
      lookupDeployments: [
        {
          context: "<value>",
          lookups: [],
        },
      ],
      maxWorkerAge: "<value>",
      name: "<value>",
      onPrem: true,
      provisioned: true,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 6531.38,
      workerRemoteAccess: true,
    },
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `count`                                             | *number*                                            | :heavy_minus_sign:                                  | number of items present in the items array          |
| `items`                                             | [models.ConfigGroup](../../models/configgroup.md)[] | :heavy_minus_sign:                                  | N/A                                                 |