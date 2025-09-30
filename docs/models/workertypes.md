# WorkerTypes

## Example Usage

```typescript
import { WorkerTypes } from "cribl-control-plane/models";

let value: WorkerTypes = "managed-edge";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"worker" | "managed-edge" | Unrecognized<string>
```