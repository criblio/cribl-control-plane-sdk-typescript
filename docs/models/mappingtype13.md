# MappingType13

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { MappingType13 } from "cribl-control-plane/models";

let value: MappingType13 = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```