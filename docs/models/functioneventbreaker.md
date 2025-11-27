# FunctionEventBreaker

## Example Usage

```typescript
import { FunctionEventBreaker } from "cribl-control-plane/models";

let value: FunctionEventBreaker = {
  conf: {},
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "event_breaker",
  initTime: 9387.52,
  loadTime: 7376.82,
  modTime: 9290.78,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `conf`                                                                   | [models.FunctionEventBreakerConf](../models/functioneventbreakerconf.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `filename`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `disabled`                                                               | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `group`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | [models.FunctionEventBreakerId](../models/functioneventbreakerid.md)     | :heavy_check_mark:                                                       | N/A                                                                      |
| `initTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `loadTime`                                                               | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `modTime`                                                                | *number*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `schema`                                                                 | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | JSON Schema Draft-06                                                     |
| `uischema`                                                               | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `version`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |