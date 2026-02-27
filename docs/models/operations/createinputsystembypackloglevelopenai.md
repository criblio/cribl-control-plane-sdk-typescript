# CreateInputSystemByPackLogLevelOpenai

Collector runtime log level.

## Example Usage

```typescript
import { CreateInputSystemByPackLogLevelOpenai } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackLogLevelOpenai = "silly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```