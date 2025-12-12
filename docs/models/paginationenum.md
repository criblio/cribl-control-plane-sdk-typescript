# PaginationEnum

## Example Usage

```typescript
import { PaginationEnum } from "cribl-control-plane/models";

let value: PaginationEnum = "response_header";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"none" | "response_body" | "response_header" | "response_header_link" | "request_offset" | "request_page" | Unrecognized<string>
```