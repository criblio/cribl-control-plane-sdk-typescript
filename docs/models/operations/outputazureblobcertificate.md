# OutputAzureBlobCertificate

## Example Usage

```typescript
import { OutputAzureBlobCertificate } from "cribl-control-plane/models/operations";

let value: OutputAzureBlobCertificate = {
  certificateName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `certificateName`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | The certificate you registered as credentials for your app in the Azure portal |