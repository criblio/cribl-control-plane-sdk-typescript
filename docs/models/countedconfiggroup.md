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
      incompatibleWorkerCount: 9454.96,
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
      streamtags: [
        "<value 1>",
        "<value 2>",
      ],
      tags: "<value>",
      type: "lake_access",
      upgradeVersion: "<value>",
      workerCount: 6448.97,
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