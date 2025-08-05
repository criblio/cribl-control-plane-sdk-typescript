# CreateProductsGroupsByProductRequest

## Example Usage

```typescript
import { CreateProductsGroupsByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateProductsGroupsByProductRequest = {
  product: "stream",
  configGroup: {
    cloud: {
      provider: "aws",
      region: "<value>",
    },
    configVersion: "<value>",
    deployingWorkerCount: 7579.9,
    description:
      "volleyball yearningly hm inasmuch tenement whoever pleased delirious produce",
    estimatedIngestRate: 9183.51,
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
    incompatibleWorkerCount: 4528.47,
    inherits: "<value>",
    isFleet: true,
    isSearch: true,
    lookupDeployments: [
      {
        context: "<value>",
        lookups: [],
      },
    ],
    maxWorkerAge: "<value>",
    name: "<value>",
    onPrem: true,
    provisioned: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tags: "<value>",
    type: "lake_access",
    upgradeVersion: "<value>",
    workerCount: 6410.88,
    workerRemoteAccess: true,
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `product`                                                                                                          | [operations.CreateProductsGroupsByProductProduct](../../models/operations/createproductsgroupsbyproductproduct.md) | :heavy_check_mark:                                                                                                 | Cribl Product                                                                                                      |
| `configGroup`                                                                                                      | [models.ConfigGroup](../../models/configgroup.md)                                                                  | :heavy_check_mark:                                                                                                 | ConfigGroup object                                                                                                 |