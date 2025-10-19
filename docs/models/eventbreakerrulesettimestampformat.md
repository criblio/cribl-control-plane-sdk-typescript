# EventBreakerRulesetTimestampFormat

Auto, manual format (strptime), or current time

## Example Usage

```typescript
import { EventBreakerRulesetTimestampFormat } from "cribl-control-plane/models";

let value: EventBreakerRulesetTimestampFormat = {
  format: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [models.TimestampType](../models/timestamptype.md) | :heavy_minus_sign:                                 | N/A                                                |
| `length`                                           | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `format`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |