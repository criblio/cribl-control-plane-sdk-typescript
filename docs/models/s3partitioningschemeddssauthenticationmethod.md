# S3PartitioningSchemeDdssAuthenticationMethod

AWS authentication method. Choose Auto to use IAM roles.

## Example Usage

```typescript
import { S3PartitioningSchemeDdssAuthenticationMethod } from "cribl-control-plane/models";

let value: S3PartitioningSchemeDdssAuthenticationMethod = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```