# CreateConfigGroupByProductRequest

## Example Usage

```typescript
import { CreateConfigGroupByProductRequest } from "cribl-control-plane/models/operations";

let value: CreateConfigGroupByProductRequest = {
  product: "outpost",
  groupCreateRequest: {
    cloud: {
      provider: "azure",
      region: "<value>",
    },
    deployingWorkerCount: 1686.56,
    description: "reorient honestly bewail yummy athwart",
    estimatedIngestRate: 4096,
    git: {
      commit: "<value>",
      localChanges: 3203.95,
      log: [
        {
          author_email: "<value>",
          author_name: "<value>",
          date: "2024-04-14",
          hash: "<value>",
          message: "<value>",
          short: "<value>",
        },
      ],
    },
    id: "<id>",
    incompatibleWorkerCount: 4612.22,
    inherits: "<value>",
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
    provisioned: true,
    sourceGroupId: "<id>",
    streamtags: [
      "<value 1>",
    ],
    tags: "<value>",
    type: "local_search",
    upgradeVersion: "<value>",
    workerCount: 417.31,
    workerRemoteAccess: false,
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `product`                                                                           | [models.ProductsCore](../../models/productscore.md)                                 | :heavy_check_mark:                                                                  | Name of the Cribl product to add the Worker Group, Outpost Group, or Edge Fleet to. |
| `groupCreateRequest`                                                                | [models.GroupCreateRequest](../../models/groupcreaterequest.md)                     | :heavy_check_mark:                                                                  | GroupCreateRequest object                                                           |