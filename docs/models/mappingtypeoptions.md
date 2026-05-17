# MappingTypeOptions

How event fields are mapped to ClickHouse columns

## Example Usage

```typescript
import { MappingTypeOptions } from "cribl-control-plane/models";

let value: MappingTypeOptions = "custom";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```