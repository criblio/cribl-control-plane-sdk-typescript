# OutputDynatraceHttpFormat4

How to format events before sending. Defaults to JSON. Plaintext is not currently supported.

## Example Usage

```typescript
import { OutputDynatraceHttpFormat4 } from "cribl-control-plane/models";

let value: OutputDynatraceHttpFormat4 = "plaintext";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json_array" | "plaintext" | Unrecognized<string>
```