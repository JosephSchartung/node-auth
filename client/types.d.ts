type UserType = {
    username: string,
    name: string,
}
type RegisterUserData = {
    name: string,
    username: string,
    password: string,
    password2: string
}

type LoginUserData = {
    username: string,
    password: string,
}

type JwtToken = {
    id: string,
    name: string,
    username: string,
    iat: number,
    exp: number
}

type AuthType = {
    isAuthenticated: boolean,
    user: UserType,
    loading: boolean,
}

type State = {
    auth: AuthType
    errors: any
}