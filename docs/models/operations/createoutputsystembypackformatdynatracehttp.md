# CreateOutputSystemByPackFormatDynatraceHTTP

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { CreateOutputSystemByPackFormatDynatraceHTTP } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackFormatDynatraceHTTP = "json_array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```