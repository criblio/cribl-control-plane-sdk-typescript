# ExecutorTypeSavedJobExecutor

## Example Usage

```typescript
import { ExecutorTypeSavedJobExecutor } from "cribl-control-plane/models";

let value: ExecutorTypeSavedJobExecutor = {
  type: "<value>",
  storeTaskResults: false,
  conf: {},
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The type of executor to run                                                                                                      |
| `storeTaskResults`                                                                                                               | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Determines whether or not to write task results to disk                                                                          |
| `conf`                                                                                                                           | [models.ExecutorSpecificSettingsTypeSavedJobExecutorExecutor](../models/executorspecificsettingstypesavedjobexecutorexecutor.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |