# FormatDynatraceHTTP

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { FormatDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: FormatDynatraceHTTP = "plaintext";
```

## Values

```typescript
"json_array" | "plaintext"
```