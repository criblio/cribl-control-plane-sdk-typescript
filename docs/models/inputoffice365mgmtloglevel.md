# InputOffice365MgmtLogLevel

Collector runtime Log Level

## Example Usage

```typescript
import { InputOffice365MgmtLogLevel } from "cribl-control-plane/models";

let value: InputOffice365MgmtLogLevel = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```