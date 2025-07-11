import { ROLE } from "./local.enum";

export type Employee = {
  emp_ID: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_no: string;
  manager: string;
  subteam: string;
  strat_id: string;
  // strat_name: string;
}

export type Strategy = {
  strat_id: string;
  strat_name: string;
  // employees: Employee[];
}

export type Subteam = {
  key: string;
  text: string;
}

export type Role = {
  key: string;
  text: string;
}

export type User = {
  current_eid: string
  current_role: ROLE.Admin | ROLE.Employee
}