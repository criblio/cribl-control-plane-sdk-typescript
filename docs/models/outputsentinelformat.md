# OutputSentinelFormat

## Example Usage

```typescript
import { OutputSentinelFormat } from "cribl-control-plane/models";

let value: OutputSentinelFormat = "ndjson";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ndjson" | "json_array" | "custom" | "advanced" | Unrecognized<string>
```