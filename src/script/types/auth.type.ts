export interface AuthResponse {
    data: {
        user: User | null;
        session: Session | null;
    }
    error?: {
        __isAuthError: boolean;
        name: string;
        status: number;
        code: string;
    }
}


export interface User {
    id: string
    aud: string
    role: string
    email: string
    email_confirmed_at: string
    phone: string
    confirmation_sent_at: string
    confirmed_at: string
    recovery_sent_at: string
    last_sign_in_at: string
    app_metadata: Record<string, any>,
    user_metadata: Record<string, any>,
    identities: any[],
    created_at: string,
    updated_at: string,
    is_anonymous: false
}

export interface Session {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
    user: User;

}