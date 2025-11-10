# OutputDynatraceHttpFormat5

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { OutputDynatraceHttpFormat5 } from "cribl-control-plane/models";

let value: OutputDynatraceHttpFormat5 = "plaintext";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```