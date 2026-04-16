# DistMode

Distributed deployment mode for this instance.

## Example Usage

```typescript
import { DistMode } from "cribl-control-plane/models";

let value: DistMode = "worker";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"edge" | "managed-edge" | "master" | "outpost" | "search-supervisor" | "single" | "worker" | Unrecognized<string>
```