# ContentConfigLogLevel

Collector runtime log level

## Example Usage

```typescript
import { ContentConfigLogLevel } from "cribl-control-plane/models/operations";

let value: ContentConfigLogLevel = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```