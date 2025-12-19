# OutputGrafanaCloudCompression1

Codec to use to compress the persisted data

## Example Usage

```typescript
import { OutputGrafanaCloudCompression1 } from "cribl-control-plane/models/operations";

let value: OutputGrafanaCloudCompression1 = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```