# OutputDlS3ObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputDlS3ObjectACL } from "cribl-control-plane/models";

let value: OutputDlS3ObjectACL = "aws-exec-read";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control" | Unrecognized<string>
```