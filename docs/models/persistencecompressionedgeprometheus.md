# PersistenceCompressionEdgePrometheus

Data compression format. Default is gzip.

## Example Usage

```typescript
import { PersistenceCompressionEdgePrometheus } from "cribl-control-plane/models";

let value: PersistenceCompressionEdgePrometheus = "gzip";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "gzip" | Unrecognized<string>
```