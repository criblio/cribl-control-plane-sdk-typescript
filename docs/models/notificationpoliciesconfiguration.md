# NotificationPoliciesConfiguration

## Example Usage

```typescript
import { NotificationPoliciesConfiguration } from "cribl-control-plane/models";

let value: NotificationPoliciesConfiguration = {
  policies: [
    {
      id: "<id>",
      waitToGroup: 146.33,
      groupByLabels: [
        "<value 1>",
        "<value 2>",
      ],
      conditions: [
        [
          {
            key: "<key>",
            operator: "=~",
            value: false,
          },
        ],
        [],
      ],
      templateTargetPairs: [
        {
          templateId: "<id>",
          targetId: "<id>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `policies`                                               | [models.Policy](../models/policy.md)[]                   | :heavy_minus_sign:                                       | List of notification routing policies evaluated in order |