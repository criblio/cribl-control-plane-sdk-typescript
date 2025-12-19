# LogLevelOffice365Mgmt

Collector runtime Log Level

## Example Usage

```typescript
import { LogLevelOffice365Mgmt } from "cribl-control-plane/models/operations";

let value: LogLevelOffice365Mgmt = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```