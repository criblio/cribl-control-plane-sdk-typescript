# OutputSentinelFormat6

## Example Usage

```typescript
import { OutputSentinelFormat6 } from "cribl-control-plane/models";

let value: OutputSentinelFormat6 = "json_array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```