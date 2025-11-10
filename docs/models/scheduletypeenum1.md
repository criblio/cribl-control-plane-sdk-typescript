# ScheduleTypeEnum1

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { ScheduleTypeEnum1 } from "cribl-control-plane/models";

let value: ScheduleTypeEnum1 = "cronSchedule";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```