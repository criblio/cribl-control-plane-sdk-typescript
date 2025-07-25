# OutputSentinelType

## Example Usage

```typescript
import { OutputSentinelType } from "cribl-control-plane/models/operations";

let value: OutputSentinelType = "sentinel";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sentinel" | Unrecognized<string>
```