# RunSettings

## Example Usage

```typescript
import { RunSettings } from "cribl-control-plane/models";

let value: RunSettings = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `maxTaskReschedule`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of times a task can be rescheduled.                                            |
| `now`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rescheduleDroppedTasks`                                                                      | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Reschedule tasks that failed with non-fatal errors.                                           |
| `taskHeartbeatPeriod`                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [models.RunType](../models/runtype.md)                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `additionalProperties`                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |