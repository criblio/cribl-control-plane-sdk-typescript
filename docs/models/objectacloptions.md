# ObjectAclOptions

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectAclOptions } from "cribl-control-plane/models";

let value: ObjectAclOptions = "public-read-write";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "public-read" | "public-read-write" | "authenticated-read" | "aws-exec-read" | "bucket-owner-read" | "bucket-owner-full-control" | Unrecognized<string>
```