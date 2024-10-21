import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const checkToken = () => {
        const token = Cookies.get('token');
        if (token) {
            try {
                const decoded: { exp: number } = jwtDecode(token);
                const isTokenValid = decoded.exp * 1000 > Date.now();
                if (!isTokenValid) {
                    logout();
                } else {
                    setIsAuthenticated(true);
                    navigate('/main', {
                        replace: true,
                    });
                }
            } catch (error) {
                logout();
            }
        } else {
            logout();
        }
    };

    useEffect(() => {
        checkToken();
        const interval = setInterval(checkToken, 60 * 10);
        return () => clearInterval(interval);
    }, []);

    const login = (token: string) => {
        Cookies.set('token', token, { expires: 7 });
        setIsAuthenticated(true);
        const from = location.state?.from?.pathname || '/main';
        navigate(from);
    };

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
