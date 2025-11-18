# StorageClassCloudflareR2

Storage class to select for uploaded objects

## Example Usage

```typescript
import { StorageClassCloudflareR2 } from "cribl-control-plane/models";

let value: StorageClassCloudflareR2 = "STANDARD";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"STANDARD" | "REDUCED_REDUNDANCY" | Unrecognized<string>
```