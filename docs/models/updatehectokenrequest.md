# UpdateHecTokenRequest

## Example Usage

```typescript
import { UpdateHecTokenRequest } from "cribl-control-plane/models";

let value: UpdateHecTokenRequest = {
  allowedIndexesAtToken: [
    "<value 1>",
    "<value 2>",
  ],
  description:
    "abnegate sometimes bah narrow crowded except yet thick overcooked witty",
  enabled: true,
  metadata: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `allowedIndexesAtToken`                                                | *string*[]                                                             | :heavy_minus_sign:                                                     | N/A                                                                    |
| `description`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `enabled`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | [models.EventBreakerRuleFields](../models/eventbreakerrulefields.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |