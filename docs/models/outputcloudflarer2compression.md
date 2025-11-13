# OutputCloudflareR2Compression

Data compression format to apply to HTTP content before it is delivered

## Example Usage

```typescript
import { OutputCloudflareR2Compression } from "cribl-control-plane/models";

let value: OutputCloudflareR2Compression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```