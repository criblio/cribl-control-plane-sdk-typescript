# DistMode

## Example Usage

```typescript
import { DistMode } from "cribl-control-plane/models";

let value: DistMode = "managed-edge";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"single" | "master" | "worker" | "edge" | "managed-edge" | "outpost" | "search-supervisor" | Unrecognized<string>
```