import type { UserFragment } from "../../../../graphql/generated";

export interface UserAuthorizationProps {
      user: UserFragment | undefined;
}


export interface FormControlError {
      controlName: string;
}

 