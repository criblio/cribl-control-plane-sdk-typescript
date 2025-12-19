# OutputGrafanaCloudMessageFormat1

Format to use when sending logs to Loki (Protobuf or JSON)

## Example Usage

```typescript
import { OutputGrafanaCloudMessageFormat1 } from "cribl-control-plane/models/operations";

let value: OutputGrafanaCloudMessageFormat1 = "protobuf";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"protobuf" | "json" | Unrecognized<string>
```