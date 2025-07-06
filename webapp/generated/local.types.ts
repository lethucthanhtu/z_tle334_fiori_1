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