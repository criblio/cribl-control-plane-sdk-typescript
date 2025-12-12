# CountedConfigGroup

## Example Usage

```typescript
import { CountedConfigGroup } from "cribl-control-plane/models";

let value: CountedConfigGroup = {
  count: 458945,
  items: [
    {
      cloud: {
        provider: "azure",
        region: "<value>",
      },
      configVersion: "<value>",
      deployingWorkerCount: 7401.8,
      description:
        "corrupt indeed brightly yippee ick that proceed deck indeed",
      estimatedIngestRate: 3072,
      git: {
        commit: "<value>",
        localChanges: 2849.05,
        log: [
          {
            authorEmail: "<value>",
            authorName: "<value>",
            date: "2024-12-12",
            hash: "<value>",
            message: "<value>",
            short: "<value>",
          },
        ],
      },
      id: "<id>",
      incompatibleWorkerCount: 5276.4,
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
      provisioned: false,
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      tags: "<value>",
      type: "edge",
      upgradeVersion: "<value>",
      workerCount: 927.49,
      workerRemoteAccess: true,
    },
  ],
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `count`                                          | *number*                                         | :heavy_minus_sign:                               | number of items present in the items array       |
| `items`                                          | [models.ConfigGroup](../models/configgroup.md)[] | :heavy_minus_sign:                               | N/A                                              |