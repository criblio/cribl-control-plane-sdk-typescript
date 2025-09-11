# OutputAzureLogsCompression

Codec to use to compress the persisted data

## Example Usage

```typescript
import { OutputAzureLogsCompression } from "cribl-control-plane/models";

let value: OutputAzureLogsCompression = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```