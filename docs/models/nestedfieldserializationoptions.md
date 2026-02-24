# NestedFieldSerializationOptions

How to serialize nested fields into index-time fields

## Example Usage

```typescript
import { NestedFieldSerializationOptions } from "cribl-control-plane/models";

let value: NestedFieldSerializationOptions = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "none" | Unrecognized<string>
```