# CreateOutputFormatDynatraceHTTP

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { CreateOutputFormatDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: CreateOutputFormatDynatraceHTTP = "plaintext";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```