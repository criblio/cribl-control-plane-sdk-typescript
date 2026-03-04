# CreateOutputAISIEMEndpointPath

Endpoint to send events to. Use /services/collector/event for structured JSON payloads with standard HEC top-level fields. Use /services/collector/raw for unstructured log lines (plain text).

## Example Usage

```typescript
import { CreateOutputAISIEMEndpointPath } from "cribl-control-plane/models/operations";

let value: CreateOutputAISIEMEndpointPath = "/services/collector/raw";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"/services/collector/event" | "/services/collector/raw" | Unrecognized<string>
```