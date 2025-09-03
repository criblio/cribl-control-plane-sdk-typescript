# Executor

## Example Usage

```typescript
import { Executor } from "cribl-control-plane/models";

let value: Executor = {
  type: "<value>",
  conf: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `type`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The type of executor to run                                              |
| `storeTaskResults`                                                       | *boolean*                                                                | :heavy_minus_sign:                                                       | Determines whether or not to write task results to disk                  |
| `conf`                                                                   | [models.ExecutorSpecificSettings](../models/executorspecificsettings.md) | :heavy_minus_sign:                                                       | N/A                                                                      |