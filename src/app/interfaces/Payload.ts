export interface Payload {
  username: string;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
}
