# FunctionSamplingSchema

## Example Usage

```typescript
import { FunctionSamplingSchema } from "cribl-control-plane/models";

let value: FunctionSamplingSchema = {
  rules: [
    {},
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `rules`                                                            | [models.FunctionSamplingRule](../models/functionsamplingrule.md)[] | :heavy_minus_sign:                                                 | Events matching these rules will be sampled at the given rate      |