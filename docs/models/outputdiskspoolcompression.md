# OutputDiskSpoolCompression

Data compression format. Default is gzip.

## Example Usage

```typescript
import { OutputDiskSpoolCompression } from "cribl-control-plane/models";

let value: OutputDiskSpoolCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```