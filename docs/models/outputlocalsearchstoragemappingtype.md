# OutputLocalSearchStorageMappingType

How event fields are mapped to columns.

## Example Usage

```typescript
import { OutputLocalSearchStorageMappingType } from "cribl-control-plane/models";

let value: OutputLocalSearchStorageMappingType = "custom";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"automatic" | "custom" | Unrecognized<string>
```