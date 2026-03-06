# CreateInputScheduleType

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { CreateInputScheduleType } from "cribl-control-plane/models/operations";

let value: CreateInputScheduleType = "cronSchedule";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```