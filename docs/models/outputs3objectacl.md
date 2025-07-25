# OutputS3ObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputS3ObjectACL } from "cribl-control-plane/models";

let value: OutputS3ObjectACL = "aws-exec-read";
```

## Values

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control"
```