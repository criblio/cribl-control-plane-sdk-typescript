# OutputSplunkNestedFieldSerialization

How to serialize nested fields into index-time fields

## Example Usage

```typescript
import { OutputSplunkNestedFieldSerialization } from "cribl-control-plane/models/operations";

let value: OutputSplunkNestedFieldSerialization = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"json" | "none" | Unrecognized<string>
```