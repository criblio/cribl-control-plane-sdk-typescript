# SavedJobExecutorExecutor

## Example Usage

```typescript
import { SavedJobExecutorExecutor } from "cribl-control-plane/models";

let value: SavedJobExecutorExecutor = {
  type: "<value>",
  conf: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The type of executor to run                                                                              |
| `storeTaskResults`                                                                                       | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Determines whether or not to write task results to disk                                                  |
| `conf`                                                                                                   | [models.SavedJobExecutorExecutorSpecificSettings](../models/savedjobexecutorexecutorspecificsettings.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |