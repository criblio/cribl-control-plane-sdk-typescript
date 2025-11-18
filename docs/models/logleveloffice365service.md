# LogLevelOffice365Service

Collector runtime Log Level

## Example Usage

```typescript
import { LogLevelOffice365Service } from "cribl-control-plane/models";

let value: LogLevelOffice365Service = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```