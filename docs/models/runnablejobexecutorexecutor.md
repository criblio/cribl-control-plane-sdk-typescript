# RunnableJobExecutorExecutor

## Example Usage

```typescript
import { RunnableJobExecutorExecutor } from "cribl-control-plane/models";

let value: RunnableJobExecutorExecutor = {
  type: "<value>",
  conf: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The type of executor to run                                                                                    |
| `storeTaskResults`                                                                                             | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Determines whether or not to write task results to disk                                                        |
| `conf`                                                                                                         | [models.RunnableJobExecutorExecutorSpecificSettings](../models/runnablejobexecutorexecutorspecificsettings.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |