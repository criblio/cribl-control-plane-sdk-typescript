# ScheduleTypeSavedJobCollectionLogLevel

Level at which to set task logging

## Example Usage

```typescript
import { ScheduleTypeSavedJobCollectionLogLevel } from "cribl-control-plane/models";

let value: ScheduleTypeSavedJobCollectionLogLevel = "warn";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```