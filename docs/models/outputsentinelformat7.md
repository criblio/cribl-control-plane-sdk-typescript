# OutputSentinelFormat7

## Example Usage

```typescript
import { OutputSentinelFormat7 } from "cribl-control-plane/models";

let value: OutputSentinelFormat7 = "json_array";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```