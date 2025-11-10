# OutputRouter

## Example Usage

```typescript
import { OutputRouter } from "cribl-control-plane/models";

let value: OutputRouter = {
  id: "<id>",
  type: "router",
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
  rules: [],
  description: "uh-huh lift goat honestly oh even",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique ID for this output                                                                            |
| `type`                                                                                               | [models.OutputRouterType](../models/outputroutertype.md)                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pipeline`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Pipeline to process data before sending out to this output                                           |
| `systemFields`                                                                                       | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Fields to automatically add to events, such as cribl_pipe. Supports wildcards.                       |
| `environment`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere. |
| `streamtags`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Tags for filtering and grouping in @{product}                                                        |
| `rules`                                                                                              | [models.Rule](../models/rule.md)[]                                                                   | :heavy_check_mark:                                                                                   | Event routing rules                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |