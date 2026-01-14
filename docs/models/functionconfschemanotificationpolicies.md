# FunctionConfSchemaNotificationPolicies

## Example Usage

```typescript
import { FunctionConfSchemaNotificationPolicies } from "cribl-control-plane/models";

let value: FunctionConfSchemaNotificationPolicies = {
  policies: [
    {
      id: "<id>",
      disabled: false,
      waitToGroup: 8213.72,
      groupByLabels: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      conditions: [
        [],
        [],
        [],
      ],
      templateTargetPairs: [
        {
          templateId: "<id>",
          targetId: "<id>",
        },
      ],
      final: true,
      order: 4556.84,
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `policies`                                               | [models.Policy](../models/policy.md)[]                   | :heavy_minus_sign:                                       | List of notification routing policies evaluated in order |