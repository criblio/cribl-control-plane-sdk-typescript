# FunctionT

## Example Usage

```typescript
import { FunctionT } from "cribl-control-plane/models";

let value: FunctionT = {
  id: "eval",
  conf: {
    add: [],
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `id`                                             | [models.IdEnum](../models/idenum.md)             | :heavy_check_mark:                               | N/A                                              |
| `conf`                                           | [models.FunctionConf](../models/functionconf.md) | :heavy_check_mark:                               | N/A                                              |
| `additionalProperties`                           | Record<string, *any*>                            | :heavy_minus_sign:                               | N/A                                              |