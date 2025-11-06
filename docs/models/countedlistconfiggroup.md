# CountedListConfigGroup

## Example Usage

```typescript
import { CountedListConfigGroup } from "cribl-control-plane/models";

let value: CountedListConfigGroup = {
  count: 742505,
  items: [
    {
      cloud: {
        provider: "azure",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 4929.7,
      description: "while tricky boastfully impact extremely kit duh",
      estimatedIngestRate: 2048,
      git: {
        commit: "<value>",
        localChanges: 5214.67,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-08-07",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 6397.95,
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
      provisioned: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 1177.16,
      workerRemoteAccess: false,
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `count`                                          | *number*                                         | :heavy_minus_sign:                               | number of items present in the items array       |
| `items`                                          | [models.ConfigGroup](../models/configgroup.md)[] | :heavy_minus_sign:                               | N/A                                              |