# CreateOutputIngestionMode

## Example Usage

```typescript
import { CreateOutputIngestionMode } from "cribl-control-plane/models/operations";

let value: CreateOutputIngestionMode = "streaming";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"batching" | "streaming" | Unrecognized<string>
```