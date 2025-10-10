# OutputElasticCloudCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { OutputElasticCloudCompression } from "cribl-control-plane/models";

let value: OutputElasticCloudCompression = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```