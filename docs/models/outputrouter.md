# OutputRouter

## Example Usage

```typescript
import { OutputRouter } from "cribl-control-plane/models";

let value: OutputRouter = {
  type: "router",
  rules: [
    {
      filter: "<value>",
      output: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique ID for this output                                                                            |
| `type`                                                                                               | *"router"*                                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pipeline`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Pipeline to process data before sending out to this output                                           |
| `systemFields`                                                                                       | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Fields to automatically add to events, such as cribl_pipe. Supports wildcards.                       |
| `environment`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Optionally, enable this config only on a specified Git branch. If empty, will be enabled everywhere. |
| `streamtags`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Tags for filtering and grouping in @{product}                                                        |
| `rules`                                                                                              | [models.OutputRouterRule](../models/outputrouterrule.md)[]                                           | :heavy_check_mark:                                                                                   | Event routing rules                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |