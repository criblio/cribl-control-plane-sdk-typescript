# FunctionNotify

## Example Usage

```typescript
import { FunctionNotify } from "cribl-control-plane/models";

let value: FunctionNotify = {
  conf: {
    searchId: "<id>",
    savedQueryId: "<id>",
    trigger: "<value>",
    triggerType: "custom",
    triggerComparator: "===",
    searchUrl: "https://awful-dash.org",
    message: "<value>",
    authToken: "<value>",
    messagesEndpoint: "<value>",
    tenantId: "<id>",
  },
  filename: "example.file",
  disabled: true,
  group: "<value>",
  id: "notify",
  initTime: 7810.74,
  loadTime: 6155.35,
  modTime: 5120.74,
  name: "<value>",
  schema: {},
  uischema: {},
  version: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `conf`                                                         | [models.NotifyConfiguration](../models/notifyconfiguration.md) | :heavy_check_mark:                                             | N/A                                                            |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | [models.FunctionNotifyId](../models/functionnotifyid.md)       | :heavy_check_mark:                                             | N/A                                                            |
| `initTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | Record<string, *any*>                                          | :heavy_check_mark:                                             | JSON Schema Draft-06                                           |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |