# OutputClickHouseMappingType

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { OutputClickHouseMappingType } from "cribl-control-plane/models";

let value: OutputClickHouseMappingType = "automatic";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "custom" | Unrecognized<string>
```