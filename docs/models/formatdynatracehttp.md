# FormatDynatraceHTTP

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { FormatDynatraceHTTP } from "cribl-control-plane/models";

let value: FormatDynatraceHTTP = "plaintext";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```