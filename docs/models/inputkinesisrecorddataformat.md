# InputKinesisRecordDataFormat

Format of data inside the Kinesis Stream records. Gzip compression is automatically detected.

## Example Usage

```typescript
import { InputKinesisRecordDataFormat } from "cribl-control-plane/models";

let value: InputKinesisRecordDataFormat = "cloudwatch";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cribl" | "ndjson" | "cloudwatch" | "line" | Unrecognized<string>
```