# ConfigGroupType

## Example Usage

```typescript
import { ConfigGroupType } from "cribl-control-plane/models";

let value: ConfigGroupType = "lake_access";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"edge" | "stream" | "search" | "lake_access" | "local_search" | Unrecognized<string>
```