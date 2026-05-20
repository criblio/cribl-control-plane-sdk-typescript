# InputResponseScheduleType

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { InputResponseScheduleType } from "cribl-control-plane/models";

let value: InputResponseScheduleType = "cronSchedule";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```