# OutputSentinelFormat3

## Example Usage

```typescript
import { OutputSentinelFormat3 } from "cribl-control-plane/models";

let value: OutputSentinelFormat3 = "advanced";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```