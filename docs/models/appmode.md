# AppMode

## Example Usage

```typescript
import { AppMode } from "cribl-control-plane/models";

let value: AppMode = "worker";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"single" | "master" | "worker" | "edge" | "managed-edge" | "outpost" | Unrecognized<string>
```