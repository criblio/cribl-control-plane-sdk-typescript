# OutputDynatraceHttpFormat3

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { OutputDynatraceHttpFormat3 } from "cribl-control-plane/models";

let value: OutputDynatraceHttpFormat3 = "plaintext";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```