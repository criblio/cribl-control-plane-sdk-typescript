# ObjectAclOptions1

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectAclOptions1 } from "cribl-control-plane/models";

let value: ObjectAclOptions1 = "bucket-owner-full-control";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read" | Unrecognized<string>
```