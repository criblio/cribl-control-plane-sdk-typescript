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
    sourceGroupId: "<id>",
    streamtags: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    tags: "<value>",
    type: "lake_access",
    upgradeVersion: "<value>",
    workerCount: 5687.41,
    workerRemoteAccess: false,
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `product`                                                                           | [models.ProductsCore](../../models/productscore.md)                                 | :heavy_check_mark:                                                                  | Name of the Cribl product to add the Worker Group, Outpost Group, or Edge Fleet to. |
| `groupCreateRequest`                                                                | [models.GroupCreateRequest](../../models/groupcreaterequest.md)                     | :heavy_check_mark:                                                                  | GroupCreateRequest object                                                           |