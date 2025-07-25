# OutputSecurityLakeObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputSecurityLakeObjectACL } from "cribl-control-plane/models";

let value: OutputSecurityLakeObjectACL = "aws-exec-read";
```

## Values

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control"
```