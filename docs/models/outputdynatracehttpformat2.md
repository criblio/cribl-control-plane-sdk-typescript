# OutputDynatraceHttpFormat2

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { OutputDynatraceHttpFormat2 } from "cribl-control-plane/models";

let value: OutputDynatraceHttpFormat2 = "json_array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```