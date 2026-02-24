# CreateOutputOTLPVersion

The version of OTLP Protobuf definitions to use when structuring data to send

## Example Usage

```typescript
import { CreateOutputOTLPVersion } from "cribl-control-plane/models/operations";

let value: CreateOutputOTLPVersion = "0.10.0";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"0.10.0" | "1.3.1" | Unrecognized<string>
```