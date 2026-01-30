# CreateOutputSystemByPackMappingType

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { CreateOutputSystemByPackMappingType } from "cribl-control-plane/models/operations";

let value: CreateOutputSystemByPackMappingType = "automatic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```