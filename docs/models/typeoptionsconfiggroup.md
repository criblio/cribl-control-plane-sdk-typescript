# TypeOptionsConfigGroup

Explicit type of the Worker Group, Outpost Group, or Edge Fleet.

## Example Usage

```typescript
import { TypeOptionsConfigGroup } from "cribl-control-plane/models";

let value: TypeOptionsConfigGroup = "search";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"edge" | "lake_access" | "local_search" | "outpost" | "search" | "stream" | Unrecognized<string>
```