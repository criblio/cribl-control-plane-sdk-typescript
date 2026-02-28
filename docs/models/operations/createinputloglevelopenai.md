# CreateInputLogLevelOpenai

Collector runtime log level.

## Example Usage

```typescript
import { CreateInputLogLevelOpenai } from "cribl-control-plane/models/operations";

let value: CreateInputLogLevelOpenai = "info";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"error" | "warn" | "info" | "debug" | "silly" | Unrecognized<string>
```