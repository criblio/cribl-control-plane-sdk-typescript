# Collectors

## Example Usage

```typescript
import { Collectors } from "cribl-control-plane/models/operations";

let value: Collectors = {
  hostsfile: {
    enable: true,
  },
  interfaces: {
    enable: true,
  },
  disk: {
    enable: true,
  },
  metadata: {
    enable: true,
  },
  routes: {
    enable: false,
  },
  dns: {
    enable: true,
  },
  user: {
    enable: false,
  },
  firewall: {
    enable: false,
  },
  services: {
    enable: false,
  },
  ports: {
    enable: true,
  },
  loginUsers: {
    enable: true,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `hostsfile`                                                                      | [operations.HostsFile](../../models/operations/hostsfile.md)                     | :heavy_minus_sign:                                                               | Creates events based on entries collected from the hosts file                    |
| `interfaces`                                                                     | [operations.Interfaces](../../models/operations/interfaces.md)                   | :heavy_minus_sign:                                                               | Creates events for each of the host’s network interfaces                         |
| `disk`                                                                           | [operations.DisksAndFileSystems](../../models/operations/disksandfilesystems.md) | :heavy_minus_sign:                                                               | Creates events for physical disks, partitions, and file systems                  |
| `metadata`                                                                       | [operations.HostInfo](../../models/operations/hostinfo.md)                       | :heavy_minus_sign:                                                               | Creates events based on the host system’s current state                          |
| `routes`                                                                         | [operations.Routes](../../models/operations/routes.md)                           | :heavy_minus_sign:                                                               | Creates events based on entries collected from the host’s network routes         |
| `dns`                                                                            | [operations.Dns](../../models/operations/dns.md)                                 | :heavy_minus_sign:                                                               | Creates events for DNS resolvers and search entries                              |
| `user`                                                                           | [operations.UsersAndGroups](../../models/operations/usersandgroups.md)           | :heavy_minus_sign:                                                               | Creates events for local users and groups                                        |
| `firewall`                                                                       | [operations.Firewall](../../models/operations/firewall.md)                       | :heavy_minus_sign:                                                               | Creates events for Firewall rules entries                                        |
| `services`                                                                       | [operations.Services](../../models/operations/services.md)                       | :heavy_minus_sign:                                                               | Creates events from the list of services                                         |
| `ports`                                                                          | [operations.ListeningPorts](../../models/operations/listeningports.md)           | :heavy_minus_sign:                                                               | Creates events from list of listening ports                                      |
| `loginUsers`                                                                     | [operations.LoggedInUsers](../../models/operations/loggedinusers.md)             | :heavy_minus_sign:                                                               | Creates events from list of logged-in users                                      |