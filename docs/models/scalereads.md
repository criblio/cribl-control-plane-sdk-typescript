# ScaleReads

Which nodes read commands should be sent to

## Example Usage

```typescript
import { ScaleReads } from "cribl-control-plane/models";

let value: ScaleReads = "master";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"master" | "replica" | "all" | Unrecognized<string>
```