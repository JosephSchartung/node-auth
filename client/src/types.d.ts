interface IUser {
    name: string,
    username: string,
    
}

interface ILoginUser {
    username: string,
    password: string,
}

interface IRegisterUser {
    name: string,
    username: string,
    password: string,
    password2: string,
}

interface IAuth {
    isAuthenticated: boolean,
    user: IUser,
    loading: boolean
}

type RegisterUser = (userData:IRegisterUser, history:NavigateFunction) => (dispatch:Dispatch) => void;
type LoginUser = (newUser: ILoginUser) => (dispatch: Dispatch) => void;
type LogoutUser = () => void;