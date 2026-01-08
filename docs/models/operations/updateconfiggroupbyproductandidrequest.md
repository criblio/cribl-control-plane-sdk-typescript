# UpdateConfigGroupByProductAndIdRequest

## Example Usage

```typescript
import { UpdateConfigGroupByProductAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateConfigGroupByProductAndIdRequest = {
  product: "stream",
  id: "<id>",
  configGroup: {
    cloud: {
      provider: "azure",
      region: "<value>",
    },
    configVersion: "<value>",
    deployingWorkerCount: 8420.35,
    description: "monster off valiantly lest offset highly fatal",
    estimatedIngestRate: 5120,
    git: {
      commit: "<value>",
      localChanges: 2849.05,
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
    incompatibleWorkerCount: 4580.35,
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
    onPrem: true,
    provisioned: false,
    streamtags: [
      "<value 1>",
      "<value 2>",
    ],
    tags: "<value>",
    type: "local_search",
    upgradeVersion: "<value>",
    workerCount: 3493.89,
    workerRemoteAccess: true,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `product`                                                              | [models.ProductsCore](../../models/productscore.md)                    | :heavy_check_mark:                                                     | Name of the Cribl product to get the Worker Groups or Edge Fleets for. |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Worker Group or Edge Fleet to update.       |
| `configGroup`                                                          | [models.ConfigGroup](../../models/configgroup.md)                      | :heavy_check_mark:                                                     | ConfigGroup object                                                     |