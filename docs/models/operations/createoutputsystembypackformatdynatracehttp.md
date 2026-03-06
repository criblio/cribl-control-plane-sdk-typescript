# CreateOutputSystemByPackFormatDynatraceHTTP

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { CreateOutputSystemByPackFormatDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackFormatDynatraceHTTP = "json_array";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```