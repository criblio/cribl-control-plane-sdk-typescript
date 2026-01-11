# InputCollectionPart0TypeScheduleType

Select a schedule type; either an interval (in seconds) or a cron-style schedule.

## Example Usage

```typescript
import { InputCollectionPart0TypeScheduleType } from "cribl-control-plane/models/operations";

let value: InputCollectionPart0TypeScheduleType = "cronSchedule";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"interval" | "cronSchedule" | Unrecognized<string>
```