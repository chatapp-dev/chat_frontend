export interface IUser {
    name: string;
    email: string;
  }

export interface IAuthState {
    user: IUser | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

