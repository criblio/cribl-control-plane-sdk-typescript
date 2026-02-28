# CreateInputPaginationType

## Example Usage

```typescript
import { CreateInputPaginationType } from "cribl-control-plane/models/operations";

let value: CreateInputPaginationType = "none";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "response_body" | "response_header" | "response_header_link" | Unrecognized<string>
```