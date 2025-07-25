# OutputMinioObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputMinioObjectACL } from "cribl-control-plane/models/operations";

let value: OutputMinioObjectACL = "public-read-write";
```

## Values

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control"
```