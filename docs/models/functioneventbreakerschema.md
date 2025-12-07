# FunctionEventBreakerSchema

## Example Usage

```typescript
import { FunctionEventBreakerSchema } from "cribl-control-plane/models";

let value: FunctionEventBreakerSchema = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `existingOrNew`                                    | [models.ExistingOrNew](../models/existingornew.md) | :heavy_minus_sign:                                 | N/A                                                |
| `shouldMarkCriblBreaker`                           | *boolean*                                          | :heavy_minus_sign:                                 | Add this Function name to the cribl_breaker field  |