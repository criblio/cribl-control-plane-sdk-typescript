# OutputMinioStorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputMinioStorageClass } from "cribl-control-plane/models";

let value: OutputMinioStorageClass = "REDUCED_REDUNDANCY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```