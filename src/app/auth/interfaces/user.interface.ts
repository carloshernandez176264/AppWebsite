
import { Email } from "./attributtes/email.interface";
import { Id } from "./attributtes/id.interface";
import { Identificaction } from "./attributtes/identification.interface";
import { Name } from "./attributtes/name.interface";
import { Password } from "./attributtes/password.interface";

export interface User{
  id:Id;
  name:Name;
  password: Password;
  email:Email;
  identification:Identificaction;
}
