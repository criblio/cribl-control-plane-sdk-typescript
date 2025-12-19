# StorageClassExabeam

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassExabeam } from "cribl-control-plane/models/operations";

let value: StorageClassExabeam = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```