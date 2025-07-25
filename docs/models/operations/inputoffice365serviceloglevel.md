# InputOffice365ServiceLogLevel

Collector runtime Log Level

## Example Usage

```typescript
import { InputOffice365ServiceLogLevel } from "cribl-control-plane/models/operations";

let value: InputOffice365ServiceLogLevel = "debug";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```