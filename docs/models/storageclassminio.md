# StorageClassMinio

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassMinio } from "cribl-control-plane/models";

let value: StorageClassMinio = "REDUCED_REDUNDANCY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```