# PipelineFunctionEventBreakerConf

## Example Usage

```typescript
import { PipelineFunctionEventBreakerConf } from "cribl-control-plane/models";

let value: PipelineFunctionEventBreakerConf = {
  existingOrNew: "new",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `existingOrNew`                                    | [models.ExistingOrNew](../models/existingornew.md) | :heavy_check_mark:                                 | N/A                                                |
| `shouldMarkCriblBreaker`                           | *boolean*                                          | :heavy_minus_sign:                                 | Add this Function name to the cribl_breaker field  |