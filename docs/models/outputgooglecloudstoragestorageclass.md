# OutputGoogleCloudStorageStorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputGoogleCloudStorageStorageClass } from "cribl-control-plane/models";

let value: OutputGoogleCloudStorageStorageClass = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "NEARLINE" | "COLDLINE" | "ARCHIVE" | Unrecognized<string>
```