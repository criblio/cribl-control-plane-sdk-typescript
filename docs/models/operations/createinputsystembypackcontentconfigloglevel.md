# CreateInputSystemByPackContentConfigLogLevel

Collector runtime log level

## Example Usage

```typescript
import { CreateInputSystemByPackContentConfigLogLevel } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackContentConfigLogLevel = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```