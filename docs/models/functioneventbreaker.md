# FunctionEventBreaker

## Example Usage

```typescript
import { FunctionEventBreaker } from "cribl-control-plane/models";

let value: FunctionEventBreaker = {
  filename: "example.file",
  asyncTimeout: 7188.7,
  criblVersion: "<value>",
  disabled: false,
  group: "<value>",
  handleSignals: false,
  id: "event_breaker",
  loadTime: 9290.78,
  modTime: 8428.64,
  name: "<value>",
  sync: true,
  uischema: {},
  version: "<value>",
  schema: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `filename`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `asyncTimeout`                                                               | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `criblVersion`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `disabled`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `group`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `handleSignals`                                                              | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `id`                                                                         | [models.FunctionEventBreakerId](../models/functioneventbreakerid.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `loadTime`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `modTime`                                                                    | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `sync`                                                                       | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `uischema`                                                                   | Record<string, *any*>                                                        | :heavy_check_mark:                                                           | N/A                                                                          |
| `version`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `schema`                                                                     | [models.FunctionEventBreakerSchema](../models/functioneventbreakerschema.md) | :heavy_minus_sign:                                                           | N/A                                                                          |