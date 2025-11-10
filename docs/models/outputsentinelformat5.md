# OutputSentinelFormat5

## Example Usage

```typescript
import { OutputSentinelFormat5 } from "cribl-control-plane/models";

let value: OutputSentinelFormat5 = "advanced";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```