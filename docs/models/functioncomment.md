# FunctionComment

## Example Usage

```typescript
import { FunctionComment } from "cribl-control-plane/models";

let value: FunctionComment = {
  conf: {
    comment:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
  },
  filename: "example.file",
  disabled: false,
  group: "<value>",
  id: "comment",
  initTime: 226.92,
  loadTime: 2940.69,
  modTime: 5047.79,
  name: "<value>",
  schema: {},
  uischema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  version: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `conf`                                                         | [models.FunctionCommentConf](../models/functioncommentconf.md) | :heavy_check_mark:                                             | N/A                                                            |
| `filename`                                                     | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `disabled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `group`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | [models.FunctionCommentId](../models/functioncommentid.md)     | :heavy_check_mark:                                             | N/A                                                            |
| `initTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `loadTime`                                                     | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `modTime`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `schema`                                                       | Record<string, *any*>                                          | :heavy_check_mark:                                             | JSON Schema Draft-06                                           |
| `uischema`                                                     | Record<string, *any*>                                          | :heavy_check_mark:                                             | N/A                                                            |
| `version`                                                      | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |