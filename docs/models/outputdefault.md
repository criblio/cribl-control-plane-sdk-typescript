# OutputDefault

## Example Usage

```typescript
import { OutputDefault } from "cribl-control-plane/models";

let value: OutputDefault = {
  id: "<id>",
  type: "default",
  pipeline: "<value>",
  systemFields: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  environment: "<value>",
  streamtags: [
    "<value 1>",
    "<value 2>",
  ],
  defaultId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique ID for this output                                                                            |
| `type`                                                                                               | [models.OutputDefaultType](../models/outputdefaulttype.md)                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pipeline`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Pipeline to process data before sending out to this output                                           |
| `systemFields`                                                                                       | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Fields to automatically add to events, such as cribl_pipe. Supports wildcards.                       |
| `environment`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere. |
| `streamtags`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Tags for filtering and grouping in @{product}                                                        |
| `defaultId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the default output. This will be used whenever a nonexistent/deleted output is referenced.     |