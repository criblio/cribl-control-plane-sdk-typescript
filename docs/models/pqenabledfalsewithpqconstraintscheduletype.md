# PqEnabledFalseWithPqConstraintScheduleType

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { PqEnabledFalseWithPqConstraintScheduleType } from "cribl-control-plane/models";

let value: PqEnabledFalseWithPqConstraintScheduleType = "cronSchedule";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```