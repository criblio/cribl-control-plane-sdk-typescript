# TypeOptionsConfigGroup

## Example Usage

```typescript
import { TypeOptionsConfigGroup } from "cribl-control-plane/models";

let value: TypeOptionsConfigGroup = "lake_access";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"edge" | "outpost" | "stream" | "search" | "lake_access" | "local_search" | Unrecognized<string>
```