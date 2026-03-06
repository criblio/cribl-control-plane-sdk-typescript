# NestedFieldSerializationOptions

How to serialize nested fields into index-time fields

## Example Usage

```typescript
import { NestedFieldSerializationOptions } from "cribl-control-plane/models";

let value: NestedFieldSerializationOptions = "json";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"json" | "none" | Unrecognized<string>
```