# UpdateConfigGroupByProductAndIdRequest

## Example Usage

```typescript
import { UpdateConfigGroupByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateConfigGroupByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
  configGroup: {
    cloud: {
      provider: "aws",
      region: "<value>",
    },
    configVersion: "<value>",
    deployingWorkerCount: 1686.56,
    description: "reorient honestly bewail yummy athwart",
    estimatedIngestRate: 3072,
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
    incompatibleWorkerCount: 4323.13,
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
      "<value 2>",
      "<value 3>",
    ],
    tags: "<value>",
    type: "lake_access",
    upgradeVersion: "<value>",
    workerCount: 8028.07,
    workerRemoteAccess: false,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `product`                                                              | [models.ProductsCore](../../models/productscore.md)                    | :heavy_check_mark:                                                     | Name of the Cribl product to get the Worker Groups or Edge Fleets for. |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Worker Group or Edge Fleet to update.       |
| `configGroup`                                                          | [models.ConfigGroup](../../models/configgroup.md)                      | :heavy_check_mark:                                                     | ConfigGroup object                                                     |