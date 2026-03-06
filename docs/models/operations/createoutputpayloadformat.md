# CreateOutputPayloadFormat

Format to use when sending payload. Defaults to Text.

## Example Usage

```typescript
import { CreateOutputPayloadFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputPayloadFormat = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "json" | Unrecognized<string>
```