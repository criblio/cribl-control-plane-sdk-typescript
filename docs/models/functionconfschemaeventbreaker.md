# FunctionConfSchemaEventBreaker

## Example Usage

```typescript
import { FunctionConfSchemaEventBreaker } from "cribl-control-plane/models";

let value: FunctionConfSchemaEventBreaker = {
  existingOrNew: "new",
  shouldMarkCriblBreaker: false,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `existingOrNew`                                    | [models.ExistingOrNew](../models/existingornew.md) | :heavy_minus_sign:                                 | N/A                                                |
| `shouldMarkCriblBreaker`                           | *boolean*                                          | :heavy_minus_sign:                                 | Add this Function name to the cribl_breaker field  |