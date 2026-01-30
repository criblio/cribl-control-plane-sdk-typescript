# ExecutorTypeRunnableJobExecutor

## Example Usage

```typescript
import { ExecutorTypeRunnableJobExecutor } from "cribl-control-plane/models";

let value: ExecutorTypeRunnableJobExecutor = {
  type: "<value>",
  storeTaskResults: true,
  conf: {},
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The type of executor to run                                                                                                            |
| `storeTaskResults`                                                                                                                     | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | Determines whether or not to write task results to disk                                                                                |
| `conf`                                                                                                                                 | [models.ExecutorSpecificSettingsTypeRunnableJobExecutorExecutor](../models/executorspecificsettingstyperunnablejobexecutorexecutor.md) | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |