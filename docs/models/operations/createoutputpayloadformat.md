# CreateOutputPayloadFormat

Format to use when sending payload. Defaults to Text.

## Example Usage

```typescript
import { CreateOutputPayloadFormat } from "cribl-control-plane/models/operations";

let value: CreateOutputPayloadFormat = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"text" | "json" | Unrecognized<string>
```