# AISIEMEndpointPath

Regional endpoint used to send events to, such as /services/collector/event or /services/collector/raw

## Example Usage

```typescript
import { AISIEMEndpointPath } from "cribl-control-plane/models/operations";

let value: AISIEMEndpointPath = "/services/collector/raw";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"/services/collector/event" | "/services/collector/raw" | Unrecognized<string>
```