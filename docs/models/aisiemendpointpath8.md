# AISIEMEndpointPath8

Endpoint to send events to. Use /services/collector/event for structured JSON payloads with standard HEC top-level fields. Use /services/collector/raw for unstructured log lines (plain text).

## Example Usage

```typescript
import { AISIEMEndpointPath8 } from "cribl-control-plane/models";

let value: AISIEMEndpointPath8 = "/services/collector/event";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"/services/collector/event" | "/services/collector/raw" | Unrecognized<string>
```