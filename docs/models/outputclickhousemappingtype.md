# OutputClickHouseMappingType

How event fields are mapped to ClickHouse columns.

## Example Usage

```typescript
import { OutputClickHouseMappingType } from "cribl-control-plane/models";

let value: OutputClickHouseMappingType = "automatic";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```