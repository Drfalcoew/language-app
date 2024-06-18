import React, { createContext, useReducer, useContext } from 'react';

// Create the UserSettings context
export const UserSettingsContext = createContext();

// Define the initial state for the user settings
const userSettingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INTERESTS':
            return { ...state, interests: action.payload };
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_APP_STYLE':
            return { ...state, appStyle: action.payload };
        case 'SET_NOTIFICATIONS':
            return { ...state, notifications: action.payload };
        default:
            return state;
        }
  };


// Create the UserSettings provider component
const UserSettingsProvider = ({ children }) => {

    // Define the state to store user data for onboarding
    const [state, dispatch] = useReducer(userSettingsReducer, {
        interests: [],
        name: '',
        appStyle: '',
        notifications: false,
    });

    // Provide the user data and update function to the children components
    return (
        <UserSettingsContext.Provider value={{ state, dispatch }}>
            {children}
        </UserSettingsContext.Provider>
    );
};

// Custom hook to use the context
export const useUserSettings = () => {
    const context = useContext(UserSettingsContext);
    if (context === undefined) {
      throw new Error('useUserSettings must be used within a UserSettingsProvider');
    }
    return context;
  };

export default UserSettingsProvider;