# OutputGrafanaCloudMessageFormat2

Format to use when sending logs to Loki (Protobuf or JSON)

## Example Usage

```typescript
import { OutputGrafanaCloudMessageFormat2 } from "cribl-control-plane/models";

let value: OutputGrafanaCloudMessageFormat2 = "json";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"protobuf" | "json" | Unrecognized<string>
```