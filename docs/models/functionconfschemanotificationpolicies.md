# FunctionConfSchemaNotificationPolicies

## Example Usage

```typescript
import { FunctionConfSchemaNotificationPolicies } from "cribl-control-plane/models";

let value: FunctionConfSchemaNotificationPolicies = {
  policies: [
    {
      id: "<id>",
      waitToGroup: 8810.59,
      groupByLabels: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      conditions: [
        [
          {
            key: "<key>",
            operator: "!=",
            value: 4612.54,
          },
        ],
        [
          {
            key: "<key>",
            operator: "!=",
            value: 4612.54,
          },
        ],
        [],
      ],
      templateTargetPairs: [],
      order: 2760.74,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `policies`                                               | [models.Policy](../models/policy.md)[]                   | :heavy_minus_sign:                                       | List of notification routing policies evaluated in order |