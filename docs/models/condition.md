# Condition

## Example Usage

```typescript
import { Condition } from "cribl-control-plane/models";

let value: Condition = {
  key: "<key>",
  operator: "=",
  value: 9912.23,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `key`                                              | *string*                                           | :heavy_check_mark:                                 | Event field name to match against                  |
| `operator`                                         | [models.Operator](../models/operator.md)           | :heavy_check_mark:                                 | Comparison operator                                |
| `value`                                            | *models.Value*                                     | :heavy_check_mark:                                 | Value to compare against (string, number, boolean) |