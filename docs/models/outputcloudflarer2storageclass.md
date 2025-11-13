# OutputCloudflareR2StorageClass

Storage class to select for uploaded objects

## Example Usage

```typescript
import { OutputCloudflareR2StorageClass } from "cribl-control-plane/models";

let value: OutputCloudflareR2StorageClass = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```