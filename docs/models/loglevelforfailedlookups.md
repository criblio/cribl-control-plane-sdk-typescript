# LogLevelForFailedLookups

## Example Usage

```typescript
import { LogLevelForFailedLookups } from "cribl-control-plane/models";

let value: LogLevelForFailedLookups = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"silly" | "debug" | "info" | "warn" | "error" | Unrecognized<string>
```