# OutputResponseOutputDynatraceHttpFormat

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { OutputResponseOutputDynatraceHttpFormat } from "cribl-control-plane/models";

let value: OutputResponseOutputDynatraceHttpFormat = "json_array";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```