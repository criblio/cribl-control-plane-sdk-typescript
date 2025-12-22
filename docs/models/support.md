# Support

## Example Usage

```typescript
import { Support } from "cribl-control-plane/models";

let value: Support = {
  featureFlagOverrides: [
    {
      disabled: false,
      flagId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `featureFlagOverrides`                                           | [models.FeatureFlagOverride](../models/featureflagoverride.md)[] | :heavy_minus_sign:                                               | N/A                                                              |