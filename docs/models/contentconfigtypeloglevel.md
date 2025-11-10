# ContentConfigTypeLogLevel

Collector runtime Log Level

## Example Usage

```typescript
import { ContentConfigTypeLogLevel } from "cribl-control-plane/models";

let value: ContentConfigTypeLogLevel = "error";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | Unrecognized<string>
```