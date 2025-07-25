# CreateInputRecordDataFormat

Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.

## Example Usage

```typescript
import { CreateInputRecordDataFormat } from "cribl-control-plane/models/operations";

let value: CreateInputRecordDataFormat = "cribl";
```

## Values

```typescript
"cribl" | "ndjson" | "cloudwatch" | "line"
```