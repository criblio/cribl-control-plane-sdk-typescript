# InputCollectionPart0Type1ScheduleType

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { InputCollectionPart0Type1ScheduleType } from "cribl-control-plane/models";

let value: InputCollectionPart0Type1ScheduleType = "interval";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```