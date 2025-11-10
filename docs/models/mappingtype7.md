# MappingType7

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { MappingType7 } from "cribl-control-plane/models";

let value: MappingType7 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```