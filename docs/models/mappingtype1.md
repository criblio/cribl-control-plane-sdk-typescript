# MappingType1

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { MappingType1 } from "cribl-control-plane/models";

let value: MappingType1 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```