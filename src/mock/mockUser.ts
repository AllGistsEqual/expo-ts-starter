type AuthSuccess = {
    authToken: string
}

type UserData = {
    id: string
    name: string
    email: string
    password: string
    settings: {
        language: 'english' | 'deutsch' | 'français' | 'русский'
        music: 0 | 1 | 2 | 3 | 4 | 5
        theme: 'dark' | 'light'
    }
}

type SuccessValue = AuthSuccess | UserData

type FailureValue = {
    error: number
    message: string
}

type mockRequestValue = SuccessValue | FailureValue

const mockSuccess = (value: SuccessValue): Promise<SuccessValue> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), 2000)
    })
}

const mockFailure = (value: FailureValue): Promise<FailureValue> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(value), 2000)
    })
}

const fakeUserData: UserData[] = [
    {
        id: 'u0001',
        name: 'Bobette Bobson',
        email: 'bobette@bob.test',
        password: 'test123',
        settings: {
            language: 'english',
            music: 0,
            theme: 'dark',
        },
    },
    {
        id: 'u0002',
        name: 'Hans Wurst',
        email: 'hans@wurst.de',
        password: 'wiener',
        settings: {
            language: 'deutsch',
            music: 5,
            theme: 'light',
        },
    },
]

const mockCheckLoginData = (email: string, password: string): boolean =>
    fakeUserData.filter(data => data.email === email && data.password === password).length > 0

export const login = (
    email: string,
    password: string,
    shouldFail = false,
): Promise<mockRequestValue> => {
    if (shouldFail) {
        return mockFailure({ error: 500, message: 'Request failed successfully!' })
    }

    if (!mockCheckLoginData(email, password)) {
        return mockFailure({
            error: 401,
            message: 'Login failed, email or password did not match!',
        })
    }

    return mockSuccess({ authToken: 'mock_token_value' })
}

export const createAccount = (
    email: string,
    password: string,
    shouldFail = false,
): Promise<mockRequestValue> => {
    if (shouldFail) {
        return mockFailure({ error: 500, message: 'Request failed successfully!' })
    }

    return mockSuccess({ authToken: 'mock_token_value' })
}

export const getUserData = (email: string, shouldFail = false): Promise<mockRequestValue> => {
    if (shouldFail) {
        return mockFailure({ error: 401, message: 'Invalid Request' })
    }

    return mockSuccess(fakeUserData.filter(data => data.email === email)[0])
}
