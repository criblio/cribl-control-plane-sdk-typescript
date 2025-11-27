# FunctionNotifications

## Example Usage

```typescript
import { FunctionNotifications } from "cribl-control-plane/models";

let value: FunctionNotifications = {
  conf: {
    id: "<id>",
    field: "<value>",
    deduplicate: true,
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "notifications",
  initTime: 2119.14,
  loadTime: 6100.69,
  modTime: 4723.54,
  name: "<value>",
  schema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  uischema: {
    "key": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `conf`                                                                     | [models.FunctionNotificationsConf](../models/functionnotificationsconf.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `filename`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `disabled`                                                                 | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `group`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | [models.FunctionNotificationsId](../models/functionnotificationsid.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `initTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `loadTime`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `modTime`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `schema`                                                                   | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | JSON Schema Draft-06                                                       |
| `uischema`                                                                 | Record<string, *any*>                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `version`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |