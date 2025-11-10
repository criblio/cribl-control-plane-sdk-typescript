# StorageClass1Options

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClass1Options } from "cribl-control-plane/models";

let value: StorageClass1Options = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```